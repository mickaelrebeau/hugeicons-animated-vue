#!/usr/bin/env node
/**
 * Emits hand-authored icon SFCs from the per-page specs in scripts/authored/.
 *
 * Authored icons deliberately omit the "generated from @hugeicons/core-free-icons"
 * marker, so generate-missing-icons.mjs treats them as handcrafted and never
 * overwrites them.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import * as hugeicons from '@hugeicons/core-free-icons'
import { toKebab, toPascal } from './icon-motion.mjs'

const ROOT = path.join(import.meta.dirname, '..')
const OUT_DIR = path.join(ROOT, 'packages/vue/src/icons')
const SPEC_DIR = path.join(import.meta.dirname, 'authored')

/** Lets this script recognise its own output while generate-missing-icons.mjs leaves it alone. */
const AUTHORED_MARKER = 'authored from scripts/authored'

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

function formatAttrs(raw) {
  const attrs = { ...raw }
  if (attrs.stroke == null && attrs.fill == null) {
    attrs.stroke = 'currentColor'
    if (attrs.strokeLinecap == null) attrs.strokeLinecap = 'round'
    if (attrs.strokeLinejoin == null) attrs.strokeLinejoin = 'round'
    if (attrs.strokeWidth == null) attrs.strokeWidth = '1.5'
  }
  const parts = []
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'key' || value === undefined || value === null) continue
    parts.push(`${ATTR_MAP[key] || key}="${String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;')}"`)
  }
  return parts.join(' ')
}

function serialize(value, indent = 0) {
  const pad = '  '.repeat(indent)
  const inner = '  '.repeat(indent + 1)
  if (Array.isArray(value)) {
    const flat = value.every((v) => typeof v !== 'object' || v === null)
    const items = value.map((v) => serialize(v, indent + 1))
    if (flat) {
      const line = `[${items.join(', ')}]`
      if (line.length <= 96) return line
    }
    return `[\n${items.map((s) => `${inner}${s}`).join(',\n')},\n${pad}]`
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value).filter(([, v]) => v !== undefined)
    if (!entries.length) return '{}'
    const items = entries.map(([k, v]) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${serialize(v, indent + 1)}`)
    const line = `{ ${items.join(', ')} }`
    if (line.length <= 96 && !line.includes('\n')) return line
    return `{\n${items.map((s) => `${inner}${s}`).join(',\n')},\n${pad}}`
  }
  if (value === Infinity) return 'Infinity'
  if (typeof value === 'string') return `'${value.replaceAll('\\', '\\\\').replaceAll("'", "\\'")}'`
  return String(value)
}

/** Builds the { normal, animate } pair plus the stagger metadata for one part. */
function compilePart(part) {
  const normal = { ...(part.normal || {}) }
  const animate = {}

  if (part.transform) {
    if (normal.transform === undefined) normal.transform = part.transform[0]
    animate.transform = part.transform
  }
  if (part.opacity) {
    if (normal.opacity === undefined) normal.opacity = part.opacity[0]
    animate.opacity = part.opacity
  }
  if (part.d) {
    if (normal.d === undefined) normal.d = part.d[0]
    animate.d = part.d
  }
  if (part.pathLength) {
    if (normal.pathLength === undefined) normal.pathLength = 1
    if (normal.pathOffset === undefined) normal.pathOffset = 0
    if (normal.visibility === undefined) normal.visibility = 'visible'
    animate.pathLength = part.pathLength
    if (part.pathOffset) animate.pathOffset = part.pathOffset
    if (part.visibility) animate.visibility = part.visibility
  }
  if (part.strokeWidth) {
    if (normal.strokeWidth === undefined) normal.strokeWidth = part.strokeWidth[0]
    animate.strokeWidth = part.strokeWidth
  }
  if (part.fillOpacity) {
    if (normal.fillOpacity === undefined) normal.fillOpacity = part.fillOpacity[0]
    animate.fillOpacity = part.fillOpacity
  }
  if (!Object.keys(animate).length) {
    throw new Error(`part "${part.as}" has no animated track`)
  }

  const transition = {
    duration: part.dur,
    delay: part.delay,
    times: part.times,
    ease: part.ease,
    repeat: part.repeat,
    repeatDelay: part.repeatDelay,
    repeatType: part.repeatType,
  }
  for (const k of Object.keys(transition)) if (transition[k] === undefined) delete transition[k]
  return { normal, animate: { ...animate, transition } }
}

function variantName(base, used) {
  const name = `${base}Variants`
  if (!used.has(name)) return name
  let i = 2
  while (used.has(`${base}${i}Variants`)) i += 1
  return `${base}${i}Variants`
}

function emitVariants(name, compiled) {
  return `const ${name}: Variants = ${serialize(compiled, 0)};`
}

async function loadSpecs() {
  const files = (await readdir(SPEC_DIR)).filter((f) => f.endsWith('.mjs') && !f.startsWith('_')).sort()
  const specs = new Map()
  for (const file of files) {
    const mod = await import(path.join(SPEC_DIR, file))
    for (const [name, spec] of Object.entries(mod.default)) {
      if (specs.has(name)) throw new Error(`duplicate authored spec for ${name}`)
      specs.set(name, spec)
    }
  }
  return specs
}

function geometry() {
  const unique = new Map()
  for (const key of Object.keys(hugeicons)) {
    if (!key.endsWith('Icon') || key.endsWith('FreeIcons')) continue
    const data = hugeicons[key]
    if (!Array.isArray(data)) continue
    const kebab = toKebab(key)
    if (!unique.has(kebab)) unique.set(kebab, data)
  }
  return unique
}

function isAnimatedPart(part) {
  if (!part) return false
  return Boolean(
    part.transform ||
      part.opacity ||
      part.d ||
      part.pathLength ||
      part.strokeWidth ||
      part.fillOpacity,
  )
}

function paintOrder(kebab, spec, count) {
  const order = spec.paintOrder
  if (!order) return [...Array(count).keys()]
  if (order.length !== count) {
    throw new Error(`${kebab}: paintOrder must list every primitive once`)
  }
  const seen = new Set(order)
  if (seen.size !== count || [...seen].some((i) => i < 0 || i >= count)) {
    throw new Error(`${kebab}: paintOrder is not a permutation of 0..${count - 1}`)
  }
  return order
}

function buildSfc(kebab, spec, elements) {
  if (spec.parts.length !== elements.length) {
    throw new Error(
      `${kebab}: spec has ${spec.parts.length} parts but the icon has ${elements.length} primitives`,
    )
  }

  const used = new Set()
  const blocks = []
  const byKey = new Map()

  let wrapName = null
  if (spec.wrap) {
    const compiled = compilePart(spec.wrap)
    wrapName = variantName(spec.wrap.as || 'group', used)
    used.add(wrapName)
    blocks.push(emitVariants(wrapName, compiled))
  }

  const names = spec.parts.map((part) => {
    if (!isAnimatedPart(part)) return null
    const compiled = compilePart(part)
    const key = JSON.stringify(compiled)
    if (byKey.has(key)) return byKey.get(key)
    const name = variantName(part.as, used)
    used.add(name)
    byKey.set(key, name)
    blocks.push(emitVariants(name, compiled))
    return name
  })

  const nodes = elements.map((el, i) => {
    const [tag, raw] = el
    const part = spec.parts[i]
    const merged = { ...raw, ...(part?.attrs || {}) }
    const attrs = formatAttrs(merged)
    if (!isAnimatedPart(part)) return `<${tag} ${attrs} />`
    const [x, y] = part.origin || [12, 12]
    return `<motion.${tag} ${attrs} :variants="${names[i]}" :animate="controls" initial="normal" :style="{ transformOrigin: '${x}px ${y}px' }" />`
  })

  const ordered = paintOrder(kebab, spec, nodes.length).map((i) => nodes[i])
  let inner = ordered.join('\n            ')
  if (wrapName) {
    const [x, y] = spec.wrap.origin || [12, 12]
    inner = `<motion.g :variants="${wrapName}" :animate="controls" initial="normal" :style="{ transformOrigin: '${x}px ${y}px', transformBox: 'view-box' }">
              ${ordered.join('\n              ')}
            </motion.g>`
  }

  return `<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: '${toPascal(kebab)}' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// ${spec.verb}
// ${AUTHORED_MARKER}
${blocks.join('\n\n')}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: ${spec.loops ? 'true' : 'false'},
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="${spec.clip ? 'hidden' : 'visible'}">
            ${inner}
          </svg>
        </div>
</template>
`
}

async function main() {
  const specs = await loadSpecs()
  const icons = geometry()
  let written = 0
  const problems = []

  for (const [kebab, spec] of specs) {
    const elements = icons.get(kebab)
    if (!elements) {
      problems.push(`${kebab}: not in @hugeicons/core-free-icons`)
      continue
    }
    const existing = await readFile(path.join(OUT_DIR, `${kebab}.vue`), 'utf8').catch(() => '')
    const owned =
      !existing ||
      existing.includes('generated from @hugeicons/core-free-icons') ||
      existing.includes(AUTHORED_MARKER)
    if (!owned && !spec.rework) {
      problems.push(`${kebab}: handcrafted by hand — set rework: true to overwrite it deliberately`)
      continue
    }
    try {
      await writeFile(path.join(OUT_DIR, `${kebab}.vue`), buildSfc(kebab, spec, elements))
      written += 1
    } catch (err) {
      problems.push(`${kebab}: ${err.message}`)
    }
  }

  console.log(`✓ authored ${written}/${specs.size} icons`)
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):`)
    for (const p of problems) console.error(`  ${p}`)
    process.exitCode = 1
  }
}

main()
