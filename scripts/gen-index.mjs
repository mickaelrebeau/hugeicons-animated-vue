#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.join(import.meta.dirname, '..')
const ICONS = path.join(ROOT, 'packages/vue/src/icons')
const INDEX = path.join(ROOT, 'packages/vue/src/index.ts')
const DTS = path.join(ROOT, 'packages/vue/src/generated-index.d.ts')

const files = (await readdir(ICONS)).filter((f) => f.endsWith('.vue')).sort()
const entries = []

for (const f of files) {
  const src = await readFile(path.join(ICONS, f), 'utf8')
  const m = src.match(/name: '(\w+)'/)
  if (!m) continue
  entries.push({ name: f.replace('.vue', ''), component: m[1] })
}

const index = `export type { AnimatedIconHandle, AnimatedIconProps } from './types'
export { useIconAnimation } from './composables/useIconAnimation'
export { DISAPPROVED_ICON_NAMES } from './icon-approval'

${entries.map((e) => `export { default as ${e.component} } from './icons/${e.name}.vue'`).join('\n')}
`

const dts = `import type { DefineComponent } from 'vue'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'

export type { AnimatedIconHandle, AnimatedIconProps } from './types'
export { useIconAnimation } from './composables/useIconAnimation'
export { DISAPPROVED_ICON_NAMES } from './icon-approval'

type AnimatedIcon = DefineComponent<AnimatedIconProps, AnimatedIconHandle>

${entries.map((e) => `export const ${e.component}: AnimatedIcon`).join('\n')}
`

await writeFile(INDEX, index)
await writeFile(DTS, dts)
console.log(`✓ index.ts + generated-index.d.ts (${entries.length} icons)`)
