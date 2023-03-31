import type { PersiststateModuleOptions } from '../src/interfaces/core'

declare const persiststateModule: (
  moduleOptions?: PersiststateModuleOptions
) => void

export { PersiststateModuleOptions }

export default persiststateModule
