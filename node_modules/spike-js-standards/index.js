const env = require('babel-preset-env')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')

module.exports = {
  presets: [[env, { modules: false }]],
  plugins: [dynamicImport]
}
