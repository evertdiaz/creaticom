var Schema = mongoose.Schema
var user = require('./user')
var mongoose = require('mongoose')

module.exports = mongoose.model('obra', {
  name: String,
  description: String,
  date: String,
  artist: Boolean,
  author: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  category: {
    type: Schema.ObjectId,
    ref: 'category'
  }
})
