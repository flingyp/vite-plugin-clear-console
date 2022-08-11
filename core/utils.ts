/**
 * 判断是否包含在 suffix 选项中
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
