import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.join(import.meta.dirname, '..')
const ICONS = path.join(ROOT, 'packages/vue/src/icons')
const LIB = path.join(ROOT, 'packages/vue/src/composables/useIconAnimation.ts')
const TYPES = path.join(ROOT, 'packages/vue/src/types.ts')
const PUBLIC_R = path.join(ROOT, 'apps/web/public/r')

const files = (await readdir(ICONS)).filter((f) => f.endsWith('.vue')).sort()
const composable = await readFile(LIB, 'utf8')
const types = await readFile(TYPES, 'utf8')

await mkdir(PUBLIC_R, { recursive: true })

const items = []

for (const f of files) {
  const name = f.replace('.vue', '')
  const content = await readFile(path.join(ICONS, f), 'utf8')
  const item = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name,
    type: 'registry:ui',
    title: name,
    description: `Animated ${name.replace(/-\d+$/, '').replace(/-/g, ' ')} icon for Vue`,
    dependencies: ['motion-v'],
    files: [
      {
        path: `components/ui/${name}.vue`,
        type: 'registry:ui',
        content,
      },
      {
        path: 'composables/useIconAnimation.ts',
        type: 'registry:lib',
        content: composable,
      },
      {
        path: 'types/animated-icon.ts',
        type: 'registry:lib',
        content: types,
      },
    ],
  }
  items.push({ name, type: item.type, title: item.title, description: item.description, dependencies: item.dependencies, files: item.files.map(({ path: p, type }) => ({ path: p, type })) })
  await writeFile(path.join(PUBLIC_R, `${name}.json`), JSON.stringify(item, null, 2) + '\n')
}

const registry = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'hugeicons-animated-vue',
  homepage: 'https://github.com/mickaelrebeau/hugeicons-animated-vue',
  items: items.map(({ files, ...rest }) => ({
    ...rest,
    files: files.map((file) => ({ path: file.path, type: file.type })),
  })),
}

await writeFile(path.join(ROOT, 'registry.json'), JSON.stringify(registry, null, 2) + '\n')
await writeFile(
  path.join(PUBLIC_R, 'registry.json'),
  JSON.stringify({ ...registry, items }, null, 2) + '\n',
)
console.log(`✓ registry (${items.length} icons)`)
