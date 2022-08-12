export interface PluginOptions {
  exclude?: Array<string>
  suffix?: Array<string>
  inject?: { path: string; template: Array<string> }
}
