var express = require('express')
var request = require('request')
var router = express()
var user = require('../models/user')

router.get('/', function (req, res) {
  res.render('auth/index', { title: 'Ingresar' })
})

router.post('/signup', (req, res) => {
  if (req.body.isArtist == 1) req.body.isArtist = true 
  else req.body.isArtist = false
  request.post('http://localhost:3000/api/user',{json: req.body}, (error, response, body) => {
    if(error) return res.status(500).send(error)
    if(response.statusCode != 200) return res.send(response.body)
    res.status(200).send('ACA METEMOS COOKIES')
  })
})

router.post('signin', (req,res) => {
  res.send('signing')
})

module.exports = router
