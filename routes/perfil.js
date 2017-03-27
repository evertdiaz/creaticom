var express = require('express')
var apiURL = require('../config/api').url
var request = require('request')
var router = express()
var isAuth = require('../middlewares/isAuth')
var isArtist = require('../middlewares/isArtist')

router.get('/', isAuth, (req, res, next) => {
  // Aca variará por el middleware de una a otra vista
  res.render('perfil/artista', { title: 'Perfil' })
  // res.render('perfil/usuario', { title: 'Perfil' })
})

// Temporal hasta arreglar todos los enlaces en front
router.get('/obras', isArtist, (req, res, next) => {
  res.redirect('/perfil/obra/all')
})

// Ruta solo accedible por Artista (Middleware)
router.get('/obra/all', (req, res) => {
  request(apiURL + '/obras/' + req.session.user_id, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.render('perfil/obra/all', { title: 'Mis Obras', obras: response.body })
  })
})

router.post('/update', (req, res) => {
  req.body.id = req.session.user_id
  request.post(apiURL + '/user/update', {json: req.body}, (error, response, body) => {
    if (error) return res.status(500).send(error)
    res.send(response.body)
  })
})

router.get('/obra/:id', (req, res) => {
  request(apiURL + '/obra/' + req.params.id, {json: req.body}, (error, response, body) => {
    console.log(response.body)
    if (error) return res.send(error)
    res.render('perfil/obra/single', {title: 'Ver Obra', data: response.body})
  })
})

// Ruta para editar Obra, solo accesible por artista
router.get('/obra/:id/edit', (req, res) => {
  request(apiURL + '/obra/' + req.params.id, {json: req.body}, (error, response, body) => {
    console.log(response.body)
    if (error) return res.send(error)
    res.render('perfil/obra/edit', {title: 'Editar Obra', data: response.body})
  })
})

router.post('/obra/:id', (req, res) => {
  request.post(apiURL + '/obra/update/' + req.params.id, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.send(response.body)
  })
})

router.get('/new/obra', (req, res) => {
  request(apiURL + '/category', {json: req.body}, (error, response, body) => {
    res.render('perfil/obra/new', {title: 'Nueva Obra', categories: response.body})
  })
})

router.post('/new/obra', (req, res) => {
  req.body.author = req.session.user_id
  request.post(apiURL + '/obra', {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.send(response.body)
  })
})


// Ruta para añadir Obra, solo accesible por artista

// Post para cerrar sesion

module.exports = router
