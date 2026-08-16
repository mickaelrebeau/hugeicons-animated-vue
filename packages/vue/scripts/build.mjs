#!/usr/bin/env node
import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { transform } from 'esbuild'
import { compileScript, parse } from 'vue/compiler-sfc'

const PKG = path.join(import.meta.dirname, '..')
const SRC = path.join(PKG, 'src')
const DIST = path.join(PKG, 'dist')

function fileId(filePath) {
  return createHash('sha256').update(filePath).digest('hex').slice(0, 8)
}

async function compileTs(source, sourcefile) {
  const result = await transform(source, {
    loader: 'ts',
    format: 'esm',
    target: 'es2022',
    sourcefile,
  })
  return result.code
}

function withJsExt(code) {
  return code.replaceAll(
    /from ['"](\.[^'"]+)['"]/g,
    (_m, spec) => `from '${spec.endsWith('.js') ? spec : spec + '.js'}'`,
  )
}

async function compileVue(filePath, source) {
  const filename = path.basename(filePath)
  const { descriptor, errors } = parse(source, { filename })
  if (errors.length) throw new Error(`${filename}: ${errors[0].message}`)
  const script = compileScript(descriptor, {
    id: fileId(filePath),
    inlineTemplate: true,
    genDefaultAs: '__sfc__',
  })
  const ts = `${script.content}\nexport default __sfc__\n`
  return withJsExt(await compileTs(ts, filename))
}

async function writeRuntime() {
  const files = [
    'composables/useIconAnimation.ts',
    'icon-approval.ts',
    'types.ts',
  ]
  for (const rel of files) {
    const source = await readFile(path.join(SRC, rel), 'utf8')
    const js = withJsExt(await compileTs(source, rel))
    const out = path.join(DIST, rel.replace(/\.ts$/, '.js'))
    await mkdir(path.dirname(out), { recursive: true })
    await writeFile(out, js)
  }
  await writeFile(path.join(DIST, 'types.d.ts'), await readFile(path.join(SRC, 'types.ts'), 'utf8'))
  await writeFile(
    path.join(DIST, 'icon-approval.d.ts'),
    `export declare const DISAPPROVED_ICON_NAMES: ReadonlySet<string>\n`,
  )
  await mkdir(path.join(DIST, 'composables'), { recursive: true })
  await writeFile(
    path.join(DIST, 'composables/useIconAnimation.d.ts'),
    `import type { MaybeRefOrGetter } from 'vue'
import type { AnimatedIconHandle } from '../types'

export type IconPose = 'normal' | 'animate'

type AnimationControls = {
  set: (variant: IconPose | Record<string, unknown>) => void
  start: (variant: IconPose | Record<string, unknown>) => Promise<unknown>
}

export declare function useReducedMotionFlag(
  reduced?: MaybeRefOrGetter<boolean | undefined>,
): () => boolean

export declare function useIconAnimation(options: {
  controls: AnimationControls
  loops?: boolean
}): AnimatedIconHandle & {
  onMouseEnter: () => void
  onMouseLeave: () => void
}
`,
  )
}

async function writeIcons() {
  const dir = path.join(SRC, 'icons')
  const files = (await readdir(dir)).filter((f) => f.endsWith('.vue')).sort()
  await mkdir(path.join(DIST, 'icons'), { recursive: true })
  const exports = []
  let i = 0
  for (const file of files) {
    const source = await readFile(path.join(dir, file), 'utf8')
    const js = await compileVue(path.join(dir, file), source)
    await writeFile(path.join(DIST, 'icons', file.replace(/\.vue$/, '.js')), js)
    const name = source.match(/name: '(\w+)'/)?.[1]
    if (name) exports.push({ name, file: file.replace(/\.vue$/, '') })
    i += 1
    if (i % 1000 === 0) console.log(`  compiled ${i}/${files.length}`)
  }
  return exports
}

async function writeIndex(exports) {
  const index = `export { useIconAnimation } from './composables/useIconAnimation.js'
export { DISAPPROVED_ICON_NAMES } from './icon-approval.js'

${exports.map((e) => `export { default as ${e.name} } from './icons/${e.file}.js'`).join('\n')}
`
  await writeFile(path.join(DIST, 'index.js'), index)
  await writeFile(
    path.join(DIST, 'index.d.ts'),
    await readFile(path.join(SRC, 'generated-index.d.ts'), 'utf8'),
  )
}

async function main() {
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })
  console.log('runtime…')
  await writeRuntime()
  console.log('icons…')
  const exports = await writeIcons()
  await writeIndex(exports)
  console.log(`✓ dist (${exports.length} icons)`)
}

main()
