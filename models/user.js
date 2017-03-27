var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('user', {
  username: String,
  name: String,
  bio: String,
  email: String,
  password: String,
  phone: Number,
  isArtist: Boolean,
  avatar: String,
  fanpage: String,
  portafolio: String,
  web: String,
  obras: [{ type: Schema.ObjectId, ref: 'obra' }]
})
