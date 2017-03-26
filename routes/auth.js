var express = require('express')
var router = express()
var user = require('../models/user')

router.get('/', function (req, res) {
  res.render('auth/index', { title: 'Ingresar' })
})

router.post('/signup', (req, res) => {
  console.log(req.body)
  var newUser = user()
  newUser.name = req.body.name
  newUser.email = req.body.email
  newUser.password = req.body.password
  if (req.body.isArtist == 1) newUser.isArtist = true 
  else newUser.isArtist = false
  newUser.save((err, savedUser) => {
    if (err) res.send(err)
    res.status(200).send(savedUser)
  })
})

module.exports = router
