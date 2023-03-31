import type { CookieAttributes } from 'js-cookie'

export interface PersiststateModuleOptions {
  enable?: boolean
  key?: string
  paths?: string[]
  setCookiesOptions?: CookieAttributes
}
