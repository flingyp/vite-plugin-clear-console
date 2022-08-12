<div align="center">
	<h2>vite-plugin-clear-console</h2>
	<h6 align="center">The plugin is used to clear all console output in the production environment</h6>
	<a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-clear-console" alt="NPM version"></a> <a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/l/vite-plugin-clear-console?style=plastic" alt="NPM version"></a> <a href="https://www.npmjs.com/package/vite-plugin-clear-console" target="__blank"><img src="https://img.shields.io/npm/dm/vite-plugin-clear-console" alt="NPM version"></a>
</div>

<br>

## 🚀 Introduce

The advantage of using this plugin is that there is no need to delete the relevant console of the source file for debugging in the development environment and elimination in the production environment.

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
  plugins: [
    vue(),
    {
      ...clearConsole(),
      apply: 'build' // build environment
    }
  ]
})
```

## 👏 Options

1. **`exclude`**

You can specify excluded files so that the console corresponding to the source file is not deleted

2. **`suffix`**

Source file suffix that should be filtered. Its default value is `['js', 'ts', 'tsx', 'jsx', 'vue']`, and you can overwrite the option.

3. **`inject`**

You can add console to your final product. And finally added to the entry file of the project for simple description.

example：[www.baidu.com](https://www.baidu.com/)

For instance, you can view the playground.

## License

The Vite plugin is open-sourced software licensed under the [MIT license](LICENSE.md).
