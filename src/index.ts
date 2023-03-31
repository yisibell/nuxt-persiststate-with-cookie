import type { Module } from '@nuxt/types'
import type { PersiststateModuleOptions } from './interfaces/core'
import path from 'node:path'

const runModule = (
  moduleContainer: ThisParameterType<Module>,
  moduleOptions: PersiststateModuleOptions
) => {
  const { nuxt } = moduleContainer

  // Combine options
  const finalModuleOptions = Object.assign(
    { enable: true },
    nuxt.options.persiststate,
    moduleOptions
  )

  if (!finalModuleOptions.enable) return

  moduleContainer.addPlugin({
    src: path.resolve(__dirname, './runtime/plugin.js'),
    fileName: 'nuxt-persiststate-with-cookie.js',
    options: finalModuleOptions,
  })
}

export { runModule }
