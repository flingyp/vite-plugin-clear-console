// 哪些文件需要被处理 include
// 哪些文件不需要被处理 exclude
// 哪些文件的需要被处理 （给出文件的后缀名） suffix

export interface PluginOptions {
  include?: Array<string>
  exclude?: Array<string>
  suffix?: Array<string>
}
