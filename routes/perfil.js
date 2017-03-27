var express = require('express')
var apiURL = require('../config/api').url
var request = require('request')
var router = express()
var isAuth = require('../middlewares/isAuth')

router.get('/', isAuth, (req, res, next) => {
  // Aca variará por el middleware de una a otra vista
  res.render('perfil/artista', { title: 'Perfil' })
  // res.render('perfil/usuario', { title: 'Perfil' })
})

// Ruta solo accedible por Artista (Middleware)
router.get('/obras', (req, res) => {
  res.render('perfil/obras', { title: 'Mis Obras' })
})

router.post('/update', (req, res) => {
  req.body.id = req.session.user_id
  request.post(apiURL + '/user/update', {json: req.body}, (error, response, body) => {
    if (error) return res.status(500).send(error)
    res.send(response.body)
  })
})

// Ruta para editar Obra, solo accesible por artista

// Ruta para añadir Obra, solo accesible por artista

// Post para cerrar sesion

module.exports = router
