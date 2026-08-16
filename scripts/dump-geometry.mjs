#!/usr/bin/env node
/**
 * Prints the primitives of given icons (bbox + shape hints + path data) so motion
 * can be authored against the real geometry.
 *
 *   node scripts/dump-geometry.mjs <from> <count>   slice of the alphabetical list
 *   node scripts/dump-geometry.mjs name-a name-b    named icons
 *
 * Names are sorted the same way the icon files and the gallery are, so a page
 * index here always refers to the same icon as on the site.
 */
import * as hugeicons from '@hugeicons/core-free-icons'
import { analyzeElement, toKebab } from './icon-motion.mjs'

const unique = new Map()
for (const key of Object.keys(hugeicons)) {
  if (!key.endsWith('Icon') || key.endsWith('FreeIcons')) continue
  const data = hugeicons[key]
  if (!Array.isArray(data)) continue
  const kebab = toKebab(key)
  if (!unique.has(kebab)) unique.set(kebab, data)
}

const all = [...unique.keys()].sort((a, b) => (`${a}.vue` < `${b}.vue` ? -1 : 1))
const args = process.argv.slice(2)
const byName = args.length > 0 && Number.isNaN(Number(args[0]))
const names = byName ? args : all.slice(Number(args[0] || 0), Number(args[0] || 0) + Number(args[1] || 20))
const r = (n) => Math.round(n * 10) / 10

for (const name of names) {
  const data = unique.get(name)
  if (!data) {
    console.log(`\n### ?? ${name} — NOT FOUND in @hugeicons/core-free-icons`)
    continue
  }
  console.log(`\n### ${all.indexOf(name)} ${name}  (${data.length} el)`)
  data.forEach((el, i) => {
    const a = analyzeElement(el, i)
    const hints = [
      a.isCircle && 'circle',
      a.isDot && 'dot',
      a.isHLine && 'hline',
      a.isVLine && 'vline',
      a.isBar && 'bar',
      a.isArc && 'arc',
      a.isPlus && 'plus',
      a.isCheck && 'check',
      a.isX && 'x',
      a.chevron && 'chevron',
      a.closed && 'closed',
      a.dir && `dir:${a.dir}`,
    ]
      .filter(Boolean)
      .join(',')
    const d = el[1]?.d || `${JSON.stringify(el[1])}`
    console.log(
      `  [${i}] ${el[0]} box(${r(a.minX)},${r(a.minY)})-(${r(a.maxX)},${r(a.maxY)}) c(${r(a.cx)},${r(a.cy)}) ${hints}`,
    )
    console.log(`      ${d.length > 300 ? `${d.slice(0, 300)}…` : d}`)
  })
}
