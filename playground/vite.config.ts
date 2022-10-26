import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import clearConsole from 'vite-plugin-clear-console'
// eslint-disable-next-line import/no-relative-packages
import { name, version } from '../package.json'

const templateTitle = name
const templateVersion = version

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    clearConsole({
      inject: {
        path: './src/main.ts',
        template: [
          `console.log('%cWelcome to use vite-plugin-clear-console', 'color: #1c6ce3;')`,
          `console.log('%cIf it is helpful to you, please order a star, thanks. https://github.com/flingyp/vite-plugin-clear-console', 'color: #e31c6f;')`,
          `console.log('%c${templateTitle}%cV${templateVersion}', 'padding: 2px 5px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;','padding: 2px 5px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;')`
        ]
      }
    })
  ]
})
