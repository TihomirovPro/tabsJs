const del = require('del')

// clean dist
function cleanDistFolder () {
  return del('demo/**/*')
}

module.exports = { cleanDistFolder }
