var express = require('express')
var apiURL = require('../config/api').url
var azureConfig = require('../config/azure')
var request = require('request')
var azureStorage = require('azure-storage')
var router = express()
var isAuth = require('../middlewares/isAuth')
var isArtist = require('../middlewares/isArtist')
var fileService = azureStorage.createFileService(azureConfig.account, azureConfig.access)

router.get('/', isAuth, (req, res, next) => {
  // Aca variará por el middleware de una a otra vista
  res.render('perfil/artista', { title: 'Perfil' })
  // res.render('perfil/usuario', { title: 'Perfil' })
})

router.get('/obras', isAuth, isArtist, (req, res, next) => {
  res.redirect('/perfil/obra/all')
})

router.get('/obra/all', isAuth, isArtist, (req, res) => {
  request(apiURL + '/obras/' + req.session.user_id, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.render('perfil/obra/all', { title: 'Mis Obras', obras: response.body })
  })
})

router.post('/update', isAuth, (req, res) => {
  req.body.id = req.session.user_id
  request.post(apiURL + '/user/update', {json: req.body}, (error, response, body) => {
    if (error) return res.status(500).send(error)
    res.send(response.body)
  })
})

router.get('/obra/:id', isAuth, isArtist, (req, res) => {
  request(apiURL + '/obra/' + req.params.id, {json: req.body}, (error, response, body) => {
    console.log(response.body)
    if (error) return res.send(error)
    res.render('perfil/obra/single', {title: 'Ver Obra', data: response.body})
  })
})

// Ruta para editar Obra, solo accesible por artista
router.get('/obra/:id/edit', isAuth, isArtist, (req, res) => {
  request(apiURL + '/obra/' + req.params.id, {json: req.body}, (error, response, body) => {
    console.log(response.body)
    if (error) return res.send(error)
    res.render('perfil/obra/edit', {title: 'Editar Obra', data: response.body})
  })
})

router.post('/obra/:id', isAuth, isArtist, (req, res) => {
  request.post(apiURL + '/obra/update/' + req.params.id, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.send(response.body)
  })
})

router.get('/new/obra', isAuth, isArtist, (req, res) => {
  request(apiURL + '/category', {json: req.body}, (error, response, body) => {
    res.render('perfil/obra/new', {title: 'Nueva Obra', categories: response.body})
  })
})

router.post('/new/obra', isAuth, isArtist, (req, res) => {
  req.body.author = req.session.user_id
  request.post(apiURL + '/obra', {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.send(response.body)
  })
})

router.post('/upload', isAuth, isArtist, (req, res) => {
  fileService.createShareIfNotExists('taskshare', function(error, result, response) {
  if (!error) {
    fileService.createDirectoryIfNotExists('taskshare', 'taskdirectory', function(error, result, response) {
  if (!error) {
     fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'taskfile', req.body.archivo, function(error, result, response) {
    if (!error) {
      console.log(result)
      res.send(response)
    }
  });
  }
});
  }
});
 
  
})

module.exports = router
