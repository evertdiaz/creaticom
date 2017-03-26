var stylus = require('stylus')
var nib = require('nib')
module.exports = function compileStylus (str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
