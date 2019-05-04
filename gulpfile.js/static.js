const { src, dest } = require('gulp')

function copyStaticFiles () {
  return src('static/**/*.*')
    .pipe(dest('demo'))
}

module.exports = { copyStaticFiles }
