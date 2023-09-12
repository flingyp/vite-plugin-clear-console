import { Plugin } from 'vite'
import { Options } from './pluginOptions'
import {
  clearConsole, getFileSuffix, handleExcludeFile, injectConsoleTemplate,
} from './utils'

export default (options?: Options): Plugin => {
  const defaultOptions: Options = {
    exclude: [],
    suffix: ['js', 'ts', 'tsx', 'jsx', 'vue'],
  }
  const pluginOptions: Options = Object.assign(defaultOptions, options)

  return {
    name: 'vite-plugin-clear-console',
    enforce: 'post',
    apply: 'build',
    transform(code: string, id: string) {
      // filter node_modules files
      const nodeModulesReg = /\/node_modules\//g
      if (nodeModulesReg.test(id)) return code

      // exclude files
      pluginOptions.exclude = pluginOptions.exclude && handleExcludeFile(pluginOptions.exclude)
      const isIncludeExcludeFile = pluginOptions.exclude?.some((item) => id.indexOf(item) !== -1)
      if (isIncludeExcludeFile) return code

      // filter not includes suffix files
      const suffixName = getFileSuffix(id) || ''
      if (suffixName === '' || !pluginOptions.suffix?.includes(suffixName)) return code

      // inject template content
      if (pluginOptions.inject && pluginOptions.inject.template.length !== 0) {
        const injectFilePath = handleExcludeFile([pluginOptions.inject.path])[0]
        return id.indexOf(injectFilePath) === -1
          ? clearConsole(code)
          : injectConsoleTemplate(clearConsole(code), pluginOptions.inject.template)
      }

      return clearConsole(code)
    },
  }
}
