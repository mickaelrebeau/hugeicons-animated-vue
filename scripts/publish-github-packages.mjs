import { readFileSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgPath = path.join(root, 'packages/vue/package.json')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))

pkg.name = '@mickaelrebeau/hugeicons-animated-vue'
pkg.publishConfig = {
  access: 'public',
  registry: 'https://npm.pkg.github.com',
}
pkg.repository = {
  type: 'git',
  url: 'https://github.com/mickaelrebeau/hugeicons-animated-vue.git',
  directory: 'packages/vue',
}

writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)

const result = spawnSync(
  'pnpm',
  ['publish', '--no-git-checks', '--access', 'public', '--ignore-scripts'],
  {
    cwd: path.dirname(pkgPath),
    stdio: 'inherit',
    env: process.env,
  },
)

process.exit(result.status ?? 1)
