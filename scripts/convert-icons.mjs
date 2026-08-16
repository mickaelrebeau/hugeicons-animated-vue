#!/usr/bin/env node
/**
 * Ports React/motion Hugeicons into Vue 3 SFCs using motion-v.
 * Source of truth for animation geometry: the upstream icons/*.tsx files.
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.join(import.meta.dirname, '..')
const SRC_DIR = process.env.HUGEICONS_SRC || '/tmp/hugeicons-animated/icons'
const OUT_DIR = path.join(ROOT, 'packages/vue/src/icons')

const SVG_ATTR_MAP = {
  className: 'class',
  strokeWidth: 'stroke-width',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  maskUnits: 'maskUnits',
  maskContentUnits: 'maskContentUnits',
  gradientUnits: 'gradientUnits',
  gradientTransform: 'gradientTransform',
  patternUnits: 'patternUnits',
  patternContentUnits: 'patternContentUnits',
  vectorEffect: 'vector-effect',
  fontSize: 'font-size',
  fontFamily: 'font-family',
  fontWeight: 'font-weight',
  textAnchor: 'text-anchor',
  dominantBaseline: 'dominant-baseline',
  alignmentBaseline: 'alignment-baseline',
  xmlSpace: 'xml:space',
  xlinkHref: 'href',
  tabIndex: 'tabindex',
  htmlFor: 'for',
  autoComplete: 'autocomplete',
  shapeRendering: 'shape-rendering',
  colorInterpolation: 'color-interpolation',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
}

const BIND_ATTRS = new Set([
  'variants',
  'animate',
  'initial',
  'custom',
  'transition',
  'style',
  'width',
  'height',
  'id',
  'key',
  'href',
  'clip-path',
  'mask',
  'fill',
  'd',
  'opacity',
  'transform',
  'filter',
  'x',
  'y',
  'cx',
  'cy',
  'r',
  'rx',
  'ry',
  'x1',
  'x2',
  'y1',
  'y2',
  'offset',
  'points',
  'viewBox',
])

function extractBalanced(source, openIndex, openChar = '(', closeChar = ')') {
  let depth = 0
  let quote = null
  let escaped = false
  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i]
    if (quote) {
      if (escaped) escaped = false
      else if (ch === '\\') escaped = true
      else if (ch === quote) quote = null
      continue
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch
      continue
    }
    if (ch === openChar) depth += 1
    else if (ch === closeChar) {
      depth -= 1
      if (depth === 0) return source.slice(openIndex, i + 1)
    }
  }
  throw new Error('Unbalanced ' + openChar)
}

function extractObject(source, start) {
  return extractBalanced(source, start, '{', '}')
}

function skipWs(s, i) {
  while (i < s.length && /\s/.test(s[i])) i += 1
  return i
}

function parseJsxValue(s, i) {
  i = skipWs(s, i)
  if (s[i] === '"' || s[i] === "'") {
    const q = s[i]
    let j = i + 1
    let escaped = false
    for (; j < s.length; j += 1) {
      if (escaped) escaped = false
      else if (s[j] === '\\') escaped = true
      else if (s[j] === q) break
    }
    return { value: s.slice(i, j + 1), next: j + 1, kind: 'string' }
  }
  if (s[i] === '{') {
    const block = extractBalanced(s, i, '{', '}')
    return { value: block.slice(1, -1).trim(), next: i + block.length, kind: 'expr' }
  }
  let j = i
  while (j < s.length && /[^\s>=]/.test(s[j])) j += 1
  return { value: s.slice(i, j), next: j, kind: 'bare' }
}

function renameAttr(name) {
  return SVG_ATTR_MAP[name] || name
}

function formatAttr(name, parsed) {
  const vueName = renameAttr(name)
  if (parsed.kind === 'string') {
    if (vueName === 'class') return `class=${parsed.value}`
    return `${vueName}=${parsed.value}`
  }
  if (parsed.kind === 'bare') {
    if (parsed.value === '') return vueName
    return `${vueName}="${parsed.value}"`
  }
  const expr = parsed.value
  if (vueName.startsWith('on') && vueName[2] && vueName[2] === vueName[2].toUpperCase()) {
    const event = vueName.slice(2).replace(/^[A-Z]/, (c) => c.toLowerCase())
    return `@${event}="${expr}"`
  }
  if (expr === 'true') return vueName
  if (expr === 'false') return `:${vueName}="false"`
  return `:${vueName}="${expr.replace(/"/g, "'")}"`
}

function convertJsx(jsx) {
  let out = ''
  let i = 0
  while (i < jsx.length) {
    if (jsx.startsWith('{/*', i)) {
      const end = jsx.indexOf('*/}', i)
      const comment = jsx.slice(i + 3, end).trim()
      out += `<!-- ${comment} -->`
      i = end + 3
      continue
    }
    if (jsx[i] === '{' && jsx[i + 1] !== '/') {
      // stray expression in children
      const block = extractBalanced(jsx, i, '{', '}')
      const expr = block.slice(1, -1).trim()
      if (expr === '...props') {
        out += 'v-bind="$attrs"'
      } else {
        out += `{{ ${expr} }}`
      }
      i += block.length
      continue
    }
    if (jsx[i] !== '<') {
      out += jsx[i]
      i += 1
      continue
    }

    if (jsx.startsWith('</', i)) {
      const end = jsx.indexOf('>', i)
      let tag = jsx.slice(i + 2, end).trim()
      out += `</${tag}>`
      i = end + 1
      continue
    }

    // opening / self-closing tag
    i += 1
    let tagEnd = i
    while (tagEnd < jsx.length && /[\w.:-]/.test(jsx[tagEnd])) tagEnd += 1
    const tag = jsx.slice(i, tagEnd)
    i = tagEnd
    const attrs = []
    while (true) {
      i = skipWs(jsx, i)
      if (i >= jsx.length) break
      if (jsx.startsWith('/>', i) || jsx[i] === '>') break
      if (jsx.startsWith('{...props}', i)) {
        attrs.push('v-bind="$attrs"')
        i += '{...props}'.length
        continue
      }
      if (jsx.startsWith('{...', i)) {
        const block = extractBalanced(jsx, i, '{', '}')
        attrs.push(`v-bind="${block.slice(4, -1).trim()}"`)
        i += block.length
        continue
      }
      let nameEnd = i
      while (nameEnd < jsx.length && /[\w:-]/.test(jsx[nameEnd])) nameEnd += 1
      const name = jsx.slice(i, nameEnd)
      i = skipWs(jsx, nameEnd)
      if (jsx[i] === '=') {
        const parsed = parseJsxValue(jsx, i + 1)
        if (name === 'className' && parsed.kind === 'expr' && parsed.value.startsWith('cn(')) {
          attrs.push(':class="className"')
        } else if (name === 'onMouseEnter' && parsed.value.includes('handleMouseEnter')) {
          attrs.push('@mouseenter="onMouseEnter"')
        } else if (name === 'onMouseLeave' && parsed.value.includes('handleMouseLeave')) {
          attrs.push('@mouseleave="onMouseLeave"')
        } else if (name === 'ref' && parsed.kind === 'expr') {
          const refName = parsed.value.replace(/^\(|\)$/g, '').trim()
          if (refName === 'scope') attrs.push('ref="scope"')
          else attrs.push(`:ref="${parsed.value}"`)
        } else {
          attrs.push(formatAttr(name, parsed))
        }
        i = parsed.next
      } else {
        attrs.push(renameAttr(name))
      }
    }
    const selfClosing = jsx.startsWith('/>', i)
    if (selfClosing) i += 2
    else if (jsx[i] === '>') i += 1
    const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''
    out += selfClosing ? `<${tag}${attrStr} />` : `<${tag}${attrStr}>`
  }
  return out
}

function extractPreamble(src) {
  const fwd = src.search(/const \w+ = forwardRef/)
  if (fwd < 0) throw new Error('forwardRef not found')
  // after last interface block
  const interfaces = [...src.matchAll(/interface \w+Props[\s\S]*?\n\}/g)]
  const start = interfaces.length
    ? interfaces[interfaces.length - 1].index + interfaces[interfaces.length - 1][0].length
    : src.indexOf('\n\n', src.indexOf('size?: number'))
  return src.slice(start, fwd).trim()
}

function stripNamedCall(source, fnName) {
  let s = source
  while (true) {
    const idx = s.indexOf(`${fnName}(`)
    if (idx < 0) break
    const open = idx + fnName.length
    const call = extractBalanced(s, open, '(', ')')
    let start = idx
    const before = s.slice(0, idx)
    const assign = before.match(/const(?:\s+\w+|\s*\{[\s\S]*?\})\s*=\s*$/)
    if (assign) start = idx - assign[0].length
    let end = open + call.length
    if (s[end] === ';') end += 1
    s = s.slice(0, start) + s.slice(end)
  }
  return s
}

function extractInnerSetup(src) {
  const fwd = src.search(/const \w+ = forwardRef/)
  const arrow = src.indexOf('=>', fwd)
  const bodyStart = src.indexOf('{', arrow)
  const body = extractObject(src, bodyStart)
  let inner = body.slice(1, body.lastIndexOf('return'))
  inner = stripNamedCall(inner, 'useIconAnimation')
  inner = stripNamedCall(inner, 'useAnimation')
  inner = inner.replace(/const controls\s*=\s*;?/g, '')
  const lines = inner
    .split('\n')
    .map((l) => l.replace(/^\s{4}/, ''))
    .filter((l) => {
      const t = l.trim()
      if (!t) return false
      if (/^controls,?$/.test(t)) return false
      if (/^loops:\s*(true|false),?$/.test(t)) return false
      if (/^onMouseEnter,?$/.test(t) || /^onMouseLeave,?$/.test(t)) return false
      if (/^className,?$/.test(t) || /^size = 28,?$/.test(t) || /^\.\.\.props,?$/.test(t)) return false
      if (/^ref,?$/.test(t) || t === '},' || t === '});' || t === '}') return false
      if (t.includes('useCallback') || t.includes('useImperativeHandle')) return false
      if (t.startsWith('const [scope')) return false
      if (t.includes('isControlledRef') || t.includes('isPlayingRef')) return false
      return true
    })
  return lines.join('\n').trim()
}

function extractReturnJsx(src) {
  const idx = src.lastIndexOf('return (')
  if (idx < 0) throw new Error('return ( not found')
  const parens = extractBalanced(src, idx + 'return '.length, '(', ')')
  return parens.slice(1, -1).trim()
}

function componentNameFromSource(src, file) {
  const m = src.match(/export \{ (\w+) \}/)
  if (m) return m[1]
  return file
    .replace(/\.tsx$/, '')
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') + 'Icon'
}

function convertSearch01(src) {
  return `<script setup lang="ts">
import { useAnimate, useReducedMotion } from 'motion-v'
import { useTemplateRef } from 'vue'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Search01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const scope = useTemplateRef<HTMLElement>('scope')
const [, animate] = useAnimate()
const shouldReduceMotion = useReducedMotion()
let isPlaying = false

async function startAnimation() {
  if (shouldReduceMotion.value || isPlaying) return
  const target = scope.value?.querySelector<HTMLElement>('[data-search-icon]')
  if (!target) return
  isPlaying = true
  await animate(
    target,
    {
      transform: [
        'translate(0px, 0px) rotate(0deg) scale(1)',
        'translate(1.25px, -0.55px) rotate(14deg) scale(0.78)',
        'translate(0.4px, -0.8px) rotate(6deg) scale(0.76)',
        'translate(-0.65px, 0.25px) rotate(-8deg) scale(0.8)',
        'translate(-0.15px, 0.1px) rotate(-2.5deg) scale(1.08)',
        'translate(0px, 0px) rotate(0deg) scale(1)',
      ],
    },
    {
      duration: 1.24,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  )
  isPlaying = false
}

function stopAnimation() {}

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div
    ref="scope"
    class="hia-icon"
    v-bind="$attrs"
    @mouseenter="startAnimation"
  >
    <span data-search-icon style="display: inline-flex; transform-origin: 11px 11px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        overflow="visible"
      >
        <path
          d="M17 17L21 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </span>
  </div>
</template>
`
}

function convertStandard(src, file) {
  const name = componentNameFromSource(src, file)
  const loops = /loops:\s*true/.test(src)
  const preamble = extractPreamble(src)
    .replace(/: Variants/g, ': Variants')
    .trim()
  const inner = extractInnerSetup(src)
  const jsx = extractReturnJsx(src)
  let template = convertJsx(jsx)
  template = template.replace(
    /class="hia-icon"|:class="className"/,
    'class="hia-icon"',
  )
  // root div: ensure class + attrs
  template = template.replace(
    /<div(\s+)/,
    '<div class="hia-icon"$1',
  )
  template = template.replace(':class="className"', '')
  template = template.replace(/\s+class="hia-icon"\s+class="hia-icon"/, ' class="hia-icon"')

  const needsUseId = /useId\(/.test(inner)
  const vueImports = []
  if (needsUseId) vueImports.push('useId')

  const innerClean = inner
    .split('\n')
    .filter((l) => {
      const t = l.trim()
      if (t.startsWith('const [scope')) return false
      if (t.includes('useReducedMotion')) return false
      if (t.includes('isControlledRef')) return false
      if (t.includes('isPlayingRef')) return false
      if (t.includes('useCallback')) return false
      if (t.includes('useImperativeHandle')) return false
      if (t.includes('handleMouseEnter')) return false
      if (t.includes('handleMouseLeave')) return false
      if (t.startsWith('const startAnimation')) return false
      if (t.startsWith('const stopAnimation')) return false
      return true
    })
    .join('\n')
    .replaceAll('useId()', 'useId()')

  const script = `<script setup lang="ts">
import { motion, useAnimationControls${preamble.includes('Variants') ? '' : ''} } from 'motion-v'
${preamble.includes('Variants') ? `import type { Variants } from 'motion-v'\n` : ''}${
    needsUseId ? `import { useId } from 'vue'\n` : ''
  }import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: '${name}' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

${preamble}

const controls = useAnimationControls()
${innerClean ? innerClean + '\n' : ''}const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: ${loops},
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
${indent(template, 2)}
</template>
`

  return script.replace(
    `import { motion, useAnimationControls } from 'motion-v'\n`,
    preamble.includes('Variants')
      ? `import { motion, useAnimationControls } from 'motion-v'\n`
      : `import { motion, useAnimationControls } from 'motion-v'\n`,
  )
}

function indent(text, n) {
  const pad = ' '.repeat(n)
  return text
    .split('\n')
    .map((l) => (l.trim() ? pad + l : l))
    .join('\n')
}

function toKebab(name) {
  return name
    .replace(/Icon$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const files = (await readdir(SRC_DIR)).filter((f) => f.endsWith('.tsx')).sort()
  const exports = []
  const failures = []

  for (const file of files) {
    const src = await readFile(path.join(SRC_DIR, file), 'utf8')
    const name = componentNameFromSource(src, file)
    try {
      const vue = file === 'search-01.tsx' ? convertSearch01(src) : convertStandard(src, file)
      const outName = file.replace(/\.tsx$/, '.vue')
      await writeFile(path.join(OUT_DIR, outName), vue.endsWith('\n') ? vue : vue + '\n')
      exports.push({ name, file: outName.replace(/\.vue$/, '') })
    } catch (error) {
      failures.push(`${file}: ${error.message}`)
    }
  }

  console.log(`converted ${exports.length} icons, ${failures.length} failures`)
  await import('./gen-index.mjs')
  if (failures.length) {
    for (const f of failures) console.error('  ', f)
    process.exitCode = 1
  }
}

main()
