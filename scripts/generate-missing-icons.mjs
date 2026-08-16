#!/usr/bin/env node
/**
 * Generates animated Vue SFCs for free Hugeicons that are not yet in the library.
 * Geometry comes from @hugeicons/core-free-icons. Motion is planned per primitive
 * from the icon name and SVG shape (see scripts/icon-motion.mjs).
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import * as hugeicons from '@hugeicons/core-free-icons'
import {
  emitVariantsTs,
  planIcon,
  toKebab,
  toPascal,
  usesCustom,
  variantConstName,
  variantsFor,
} from './icon-motion.mjs'

const ROOT = path.join(import.meta.dirname, '..')
const OUT_DIR = path.join(ROOT, 'packages/vue/src/icons')

const ATTR_MAP = {
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeWidth: 'stroke-width',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeOpacity: 'stroke-opacity',
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  clipRule: 'clip-rule',
  clipPath: 'clip-path',
  vectorEffect: 'vector-effect',
}

const SKIP_ATTRS = new Set(['key'])

function escapeAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
}

function formatAttrs(raw) {
  const parts = []
  const attrs = { ...raw }
  const hasPaint = attrs.stroke != null || attrs.fill != null
  if (!hasPaint) {
    attrs.stroke = 'currentColor'
    if (attrs.strokeLinecap == null) attrs.strokeLinecap = 'round'
    if (attrs.strokeLinejoin == null) attrs.strokeLinejoin = 'round'
    if (attrs.strokeWidth == null) attrs.strokeWidth = '1.5'
  }
  for (const [key, value] of Object.entries(attrs)) {
    if (SKIP_ATTRS.has(key) || value === undefined || value === null) continue
    const name = ATTR_MAP[key] || key
    parts.push(`${name}="${escapeAttr(value)}"`)
  }
  return parts.join(' ')
}

function originStyle(origin) {
  const [x, y] = origin || [12, 12]
  return `{ transformOrigin: '${x}px ${y}px' }`
}

function renderEl(el, role, variantsName) {
  const [tag, raw] = el
  if (!role || role.kind === 'static') {
    return `<${tag} ${formatAttrs(raw)} />`
  }
  const custom = usesCustom(role.kind) && role.custom != null ? ` :custom="${role.custom}"` : ''
  return `<motion.${tag} ${formatAttrs(raw)} :variants="${variantsName}"${custom} :animate="controls" initial="normal" :style="${originStyle(role.origin)}" />`
}

function variantKey(role) {
  return [role.kind, role.tx ?? '', role.ty ?? ''].join(':')
}

function buildSfc(componentName, plan, elements) {
  const usedNames = new Set()
  const specs = new Map()
  const roleNames = plan.roles.map((role) => {
    if (!role || role.kind === 'static') return null
    const key = variantKey(role)
    if (specs.has(key)) return specs.get(key).name
    const name = variantConstName(role.kind, usedNames)
    usedNames.add(name)
    const spec = variantsFor(role.kind, role, plan.seed)
    specs.set(key, { name, spec })
    return name
  })

  const variantBlocks = [...specs.values()]
    .map(({ name, spec }) => `const ${name}: Variants = ${emitVariantsTs(spec)}`)
    .join('\n\n')

  const nodes = elements
    .map((el, i) => renderEl(el, plan.roles[i], roleNames[i]))
    .join('\n            ')

  return `<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: '${componentName}' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after ${plan.donor}: ${plan.verb}
// generated from @hugeicons/core-free-icons
${variantBlocks}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: ${plan.loops ? 'true' : 'false'},
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="${plan.clip ? 'hidden' : 'visible'}">
            ${nodes}
          </svg>
        </div>
</template>
`
}

function catalogElements(data) {
  return data.map(([tag, raw]) => {
    const attrs = {}
    for (const [key, value] of Object.entries(raw || {})) {
      if (key === 'key' || key === 'stroke' || key === 'strokeLinecap' || key === 'strokeLinejoin' || key === 'strokeWidth') {
        continue
      }
      attrs[key] = value
    }
    return [tag, attrs]
  })
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const existingFiles = (await readdir(OUT_DIR)).filter((f) => f.endsWith('.vue'))
  const handcrafted = new Set()
  for (const f of existingFiles) {
    const src = await readFile(path.join(OUT_DIR, f), 'utf8')
    if (!src.includes('generated from @hugeicons/core-free-icons')) {
      handcrafted.add(f.replace(/\.vue$/, ''))
    }
  }

  const unique = new Map()
  for (const key of Object.keys(hugeicons)) {
    if (!key.endsWith('Icon') || key.endsWith('FreeIcons')) continue
    const data = hugeicons[key]
    if (!Array.isArray(data)) continue
    const kebab = toKebab(key)
    if (!unique.has(kebab)) unique.set(kebab, { key, data })
  }

  let written = 0
  const counts = new Map()
  const catalog = []

  for (const [kebab, { data }] of unique) {
    if (handcrafted.has(kebab)) continue
    const plan = planIcon(kebab, data)
    const primary =
      plan.roles.map((r) => r.kind).find((k) => k !== 'static' && k !== 'frame-settle' && k !== 'impact') ||
      plan.roles[0]?.kind ||
      'settle'
    counts.set(primary, (counts.get(primary) || 0) + 1)
    const vue = buildSfc(toPascal(kebab), plan, data)
    await writeFile(path.join(OUT_DIR, `${kebab}.vue`), vue.endsWith('\n') ? vue : `${vue}\n`)
    written += 1
    catalog.push({
      name: kebab,
      elements: catalogElements(data),
      animation: {
        source: plan.source,
        donor: plan.donor,
        recipe: plan.recipe,
        verb: plan.verb,
      },
    })
  }

  await mkdir(path.join(ROOT, 'apps/web/public'), { recursive: true })
  await writeFile(path.join(ROOT, 'apps/web/public/icons-catalog.json'), JSON.stringify(catalog))

  console.log(`generated ${written} icons (${handcrafted.size} handcrafted kept)`)
  console.log(`catalog ${catalog.length} generated previews`)
  console.log('gestures:')
  for (const [id, n] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${id.padEnd(22)} ${n}`)
  }
}

main()
