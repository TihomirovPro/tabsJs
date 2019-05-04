const browserSync = require('browser-sync')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack/webpack.config.dev')

const webpackBundler = webpack(webpackConfig)

function runServer (cb) {
  browserSync.init({
    server: { baseDir: 'demo' },
    middleware: [
      webpackDevMiddleware(webpackBundler),
      webpackHotMiddleware(webpackBundler)
    ],
    open: false,
    logFileChanges: false,
    notify: false,
    online: true,
    files: [
      'demo/*.css',
      'demo/tabsJs/*.js',
      'demo/*.html'
    ]
  })
  cb()
}

// reload server
function reloadServer (cb) {
  browserSync.reload()
  cb()
}

module.exports = { runServer, reloadServer }
