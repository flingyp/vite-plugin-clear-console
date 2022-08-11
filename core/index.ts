import { Plugin } from 'vite'
import { PluginOptions } from './pluginOptions'

export default (
  options: PluginOptions = { include: ['src/**/*'], suffix: ['js', 'ts', 'tsx', 'jsx', 'vue'] }
): Plugin => {
  console.log('options->', options)
  return {
    name: 'vite-plugin-clear-console',
    enforce: 'pre',
    transform(code: string, id: string) {
      console.log('code->', code, 'id->', id)
      return code
    }
  }
}
