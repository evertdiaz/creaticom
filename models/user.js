var mongoose = require('mongoose')

module.exports = mongoose.model('user', {
  username: String,
  password: String,
  email: String,
  gender: String,
  address: String
})