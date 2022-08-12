/**
 * 获取文件后缀名
 * @param filePath
 * @returns
 */
export const getFileSuffix = (filePath: string) => filePath.split('?')[0].split('.')[1] || undefined

/**
 * 处理exclude文件路径
 * @param exclude
 * @returns
 */
export const handleExcludeFile = (exclude: string[]) => {
  let newExclude = []
  newExclude = exclude.map(item => {
    return item.replace(/^\.\//g, '/')
  })
  return newExclude
}

/**
 * 处理代码的console
 * @param code
 * @returns
 */
export const clearConsole = (code: string) => {
  let newCode = code
  const consoleReg = /.*console\.(.+)\(.+\)*/g
  newCode = newCode.replaceAll(consoleReg, '')
  return newCode
}

/**
 * 向控制台注入 console
 * @param code
 * @param template
 * @param id
 * @returns
 */
export const injectConsoleTemplate = (code: string, template: string[]) => {
  let newCode = code
  template.forEach(log => {
    newCode += `\n${log}\n`
  })
  return newCode
}
