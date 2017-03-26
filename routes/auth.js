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
    // Aca deberia meterse una vista y enviar como data el response.body (Estilo openfuture)
    if(response.statusCode != 200) return res.send(response.body)
    // A partir de acá implementar sesion en cookie
    res.status(200).send('ACA METEMOS COOKIES')
  })
})

router.post('/signin', (req,res) => {
  console.log(req.body)
  request.post('http://localhost:3000/api/auth', {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    // Aca deberia meterse una vista y enviar como data el response.body (Estilo openfuture)
    if (response.statusCode != 200) return res.send(response.body)
    // A partir de acá implementar sesion en cookie
    res.send(response.body)
  })
})

module.exports = router
