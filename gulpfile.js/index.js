const { series, parallel, watch } = require('gulp')
const { runServer, reloadServer } = require('./server')
const { cleanDistFolder } = require('./clean')
const { copyStaticFiles } = require('./static')
const { buildMarkup } = require('./markup')
const { buildStyles } = require('./styles')

// watchers
function runWatchers (cb) {
  // pug
  watch([
    'src/pages/**/*.pug',
    'src/layout/*.pug'
  ], series(buildMarkup, reloadServer))

  // styles
  watch([
    'src/styles/**/*.sass',
    'src/pages/**/*.sass'
  ], series(buildStyles))

  // static
  watch('static/**/*.*', series(copyStaticFiles))

  cb()
}

// development task
exports.default = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup, runServer),
  runWatchers
)

// build task
exports.build = series(
  cleanDistFolder,
  parallel(copyStaticFiles),
  parallel(buildStyles, buildMarkup)
)

// clean task
exports.clean = cleanDistFolder
