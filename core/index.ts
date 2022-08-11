import { Plugin } from 'vite'
import { PluginOptions } from './pluginOptions'
import { getFileSuffix, clearConsole, handleExcludeFile } from './utils'

export default (options: PluginOptions): Plugin => {
  const defaultOptions: PluginOptions = {
    exclude: [],
    suffix: ['js', 'ts', 'tsx', 'jsx', 'vue']
  }
  const pluginOptions: PluginOptions = Object.assign(defaultOptions, options)

  return {
    name: 'vite-plugin-clear-console',
    enforce: 'post',
    transform(code: string, id: string) {
      // filter node_modules files
      const nodeModulesReg = /\/node_modules\//g
      if (nodeModulesReg.test(id)) return code

      // exclude files
      pluginOptions.exclude = handleExcludeFile(pluginOptions.exclude!)
      const isIncludeExcludeFile = pluginOptions.exclude.some(item => {
        return id.indexOf(item) !== -1
      })
      if (isIncludeExcludeFile) return code

      // filter not includes suffix files
      const suffixName = getFileSuffix(id) || ''
      if (suffixName === '' || !pluginOptions.suffix?.includes(suffixName)) return code

      return clearConsole(code)
    }
  }
}
