var mongoose = require('mongoose')

module.exports = mongoose.model('user', {
  username: String,
  bio: String,
  password: String,
  email: String,
  gender: String,
  address: String,
  artist: Boolean,
  obras: String
})
