const path = require('path')

//
// base entries
//
const entries = {
  'js/tabsJs': './src/js/tabsJs.js'
}
exports.baseEntry = entries

//
// dev entries
//
const hot = 'webpack-hot-middleware/client?reload=true'
let devEntries = {}
for (const entriy in entries) {
  devEntries[entriy] = [entries[entriy], hot]
}
exports.devEntry = devEntries

//
// rules
//
exports.moduleRules = {
  rules: [{
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  }]
}

//
// frontend output
//
exports.baseOutput = {
  path: path.join(__dirname, '../demo'),
  filename: '[name].js'
}
