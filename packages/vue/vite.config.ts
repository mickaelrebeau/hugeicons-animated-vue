import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      insertTypesEntry: false,
      include: ['src/types.ts', 'src/composables/useIconAnimation.ts', 'src/icon-approval.ts'],
      exclude: ['src/env.d.ts', 'src/generated-index.d.ts'],
    }),
    {
      name: 'write-index-dts',
      async closeBundle() {
        const { copyFile } = await import('node:fs/promises')
        await copyFile(
          path.resolve(__dirname, 'src/generated-index.d.ts'),
          path.resolve(__dirname, 'dist/index.d.ts'),
        )
      },
    },
    {
      name: 'drop-vue-wrapper-chunks',
      generateBundle(_opts, bundle) {
        for (const fileName of Object.keys(bundle)) {
          if (/2\.vue\.js$/.test(fileName)) delete bundle[fileName]
        }
      },
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'motion-v', /^motion-v\//],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: false,
    minify: false,
    emptyOutDir: true,
  },
})
