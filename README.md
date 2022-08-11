<div align="center">
	<h2>vite-plugin-clear-console</h2>
	<h6 align="center">The plugin is used to clear all console output in the production environment</h6>
	<a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-clear-console" alt="NPM version"></a> <a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/l/vite-plugin-clear-console?style=plastic" alt="NPM version"></a> <a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/dm/vite-plugin-clear-console" alt="NPM version"></a>
</div>

<br>

## 📦 Installation

```sh
npm install vite-plugin-clear-console -D

yarn add vite-plugin-clear-console -D

pnpm install vite-plugin-clear-console -D
```

## 🎉 Usage

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import clearConsole from 'vite-plugin-clear-console'

export default defineConfig({
  plugins: [vue(), clearConsole()]
})
```
