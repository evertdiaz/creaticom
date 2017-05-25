var express = require('express')
var request = require('request')
var apiURL = require('../config/api').url
var router = express()

router.get('/all', (req, res) => {
  request(apiURL + '/artistas', {json: req.body}, (error, response, body) => {
    console.log(response.body)
    res.render('artista/all', { title: 'Artistas', data: response.body })  
  })
})

router.get('/:username', (req, res) => {
  request(apiURL + '/artista/' + req.params.username, {json: req.body}, (error, response, body) => {
    console.log('+++++++', body)
    if (body == undefined) return res.render('artista/single', { data: {alert: 'No existe Artista'}, title: 'Artista ' + req.params.username, categorias:null, subcategorias:null, obras:null } )  
    if (!body.isArtist) return res.render('artista/single', { data: {alert: 'No existe Artista'}, title: 'Artista ' + req.params.username, categorias:null, subcategorias:null, obras:null } )  
    request(apiURL + '/obrasfull', {json:req.body}, (err1, resp1, body1) => {
      request(apiURL + '/categoriasfull', {json:req.body}, (err2, resp2, body2) => {
        request(apiURL + '/subcategoriasfull', {json:req.body}, (err3, resp3, body3) => {
          if (error) return res.send(error)
          res.render('artista/single', { data: response.body, title: 'Artista ' + req.params.username, categorias:body2, subcategorias:body3, obras:body1 } )  
        })
      })
    })
  })
})

module.exports = router
