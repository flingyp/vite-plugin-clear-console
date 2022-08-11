import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'core/index.ts'),
      name: 'bundle',
      fileName: 'bundle'
    }
  },
  plugins: [dts({ include: './core' })]
})
