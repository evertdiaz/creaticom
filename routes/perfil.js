var express = require('express')
var router = express()
var isAuth = require('../middlewares/isAuth')

router.get('/', isAuth, function (req, res, next) {
  // Aca variará por el middleware de una a otra vista
  res.render('perfil/artista', { title: 'Perfil' })
  // res.render('perfil/usuario', { title: 'Perfil' })
})

// Ruta solo accedible por Artista (Middleware)
router.get('/obras', function (req, res) {
  res.render('perfil/obras', { title: 'Mis Obras' })
})

// Ruta para editar perfil, accedible por ambos

// Ruta para editar Obra, solo accesible por artista

// Ruta para añadir Obra, solo accesible por artista

// Post para cerrar sesion

module.exports = router
