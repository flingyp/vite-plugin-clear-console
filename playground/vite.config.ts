import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import clearConsole from 'vite-plugin-clear-console'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), clearConsole()]
})
