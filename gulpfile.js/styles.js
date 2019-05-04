const { src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const sourcemaps = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const toaster = require('./toaster')
const cleanCSS = require('gulp-clean-css')
const combineMq = require('gulp-combine-mq')
const flatten = require('gulp-flatten')

const isDevelopment = process.env.NODE_ENV !== 'production'

function buildStyles (cb) {
  return src('src/styles/main.sass')
    .pipe(sassGlob())
    .pipe(toaster('Sass', cb))
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer('last 4 version', '>= ie 11'))
    .pipe(gulpif(!isDevelopment, combineMq({ beautify: false })))
    .pipe(gulpif(!isDevelopment, cleanCSS({ level: 2, rebase: false })))
    .pipe(gulpif(isDevelopment, sourcemaps.write('./')))
    .pipe(flatten())
    .pipe(dest('demo'))
}

module.exports = { buildStyles }
