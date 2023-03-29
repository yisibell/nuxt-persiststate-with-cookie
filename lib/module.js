
const path = require('path')

function persiststateModule (_moduleOptions) {
  const { nuxt } = this

  // Combine options
  const moduleOptions = Object.assign({enable: true}, nuxt.options.persiststate, _moduleOptions) 
  
  if (!moduleOptions.enable) return

  this.addPlugin({
    src: path.join(__dirname, './runtime/plugin.js'),
    fileName: 'nuxt-persiststate-with-cookie.js',
    options: moduleOptions,
  })  
}

module.exports = persiststateModule
module.exports.meta = require('../package.json')
