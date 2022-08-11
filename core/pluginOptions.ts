// 哪些文件不需要被处理 exclude
// 哪些文件的需要被处理 （给出文件的后缀名） suffix

export interface PluginOptions {
  exclude?: Array<string>
  suffix?: Array<string>
}
