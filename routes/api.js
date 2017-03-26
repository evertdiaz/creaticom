var express = require('express')
var router = express.Router()
var category = require('../models/category')
var user = require('../models/user')
var obra = require('../models/obra')

router.get('/', function (req, res) {
  res.send('Welcome')
})

router.post('/category', (req, res) => {
  newCategory = new category()
  newCategory.name = req.body.name
  newCategory.description = req.body.description
  newCategory.save((err, savedCategory) => {
    if (err) res.send(err)
    res.send(savedCategory)
  })
})

router.post('/user', (req, res) => {
  newUser = new user()
  newUser.username = req.body.username
  newUser.name = req.body.name
  newUser.bio = req.body.bio
  newUser.email = req.body.email
  newUser.password = req.body.password
  newUser.phone = req.body.phone
  newUser.isArtist = req.body.isArtist
  newUser.obras = req.body.obras || []
  newUser.save((err, savedUser) => {
    if (err) res.send(err)
    res.send(savedUser)
  })
})

router.post('/obra', (req, res) => {
 var newObra = new obra()
 newObra.name = req.body.name
 newObra.description = req.body.description
 newObra.month = req.body.month
 newObra.year = req.body.year
 newObra.author = req.body.author
 newObra.category = req.body.category
 newObra.save((err, obraSaved) => {
  if (err) res.send(err)
  // El valor del id reemplazarlo por el que viene en el req
  user.findOne({_id: '58d811f36405471ac8f9ad86'}, (err, foundUser) => {
    foundUser.obras = foundUser.obras.concat(obraSaved._id)
    foundUser.save((err, updatedUser) => {
      console.log(updatedUser)
      res.send(obraSaved)
    })
  })
 })
})

module.exports = router
