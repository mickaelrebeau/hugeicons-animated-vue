import { readdirSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const root = import.meta.dirname
const iconsDir = path.resolve(root, '../../packages/vue/src/icons')
const iconPage = new Map(
  readdirSync(iconsDir)
    .filter((file) => file.endsWith('.vue'))
    .map((file) => file.slice(0, -4))
    .sort()
    .map((name, index) => [name, Math.floor(index / 80)]),
)

const landingIcons = new Set([
  'alert-circle',
  'bookmark-01',
  'cloud-rain',
  'coffee-02',
  'copy-01',
  'cursor-pointer-01',
  'mail-open',
  'notification-03',
  'play',
  'search-01',
  'settings-01',
  'tick-02',
])

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
      'hugeicons-animated-vue': path.resolve(root, '../../packages/vue/src'),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replaceAll('\\', '/')
          const match = normalized.match(/\/packages\/vue\/src\/icons\/([^/]+)\.vue$/)
          if (!match || landingIcons.has(match[1])) return
          const page = iconPage.get(match[1])
          if (page == null) return
          return `icons-p${String(page).padStart(2, '0')}`
        },
      },
    },
  },
})
