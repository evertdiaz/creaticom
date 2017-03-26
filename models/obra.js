var user = require('./user')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('obra', {
  name: String,
  description: String,
  month: String,
  year: Number,
  author: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  category: {
    type: Schema.ObjectId,
    ref: 'category'
  }
})
