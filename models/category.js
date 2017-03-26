var Schema = mongoose.Schema
var user = require('./user')
var mongoose = require('mongoose')

module.exports = mongoose.model('category', {
  name: String,
  description: String
})
