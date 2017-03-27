var mongoose = require('mongoose')

module.exports = mongoose.model('category', {
  name: String,
  description: String
})
