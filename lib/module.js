
const { runModule } = require('./core.js')

function persiststateModule (_moduleOptions) {
  runModule(this, _moduleOptions)
}

module.exports = persiststateModule
module.exports.meta = require('../package.json')
