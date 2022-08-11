import { Plugin } from 'vite'

export default (): Plugin => {
  return {
    name: 'vite-plugin-clear-console',
    enforce: 'pre',
    transform(code: string, id: string) {
      console.log('code->', code)
      console.log('id->', id)
      return code
    }
  }
}
