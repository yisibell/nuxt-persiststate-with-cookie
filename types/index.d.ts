import type { CookieAttributes } from 'js-cookie'

interface PersiststateModuleOptions {
  enable?: boolean
  key?: string
  paths?: string[]
  setCookiesOptions?: CookieAttributes
}

declare const persiststateModule: (moduleOptions?: PersiststateModuleOptions) => void

export {
  PersiststateModuleOptions
}

export default persiststateModule