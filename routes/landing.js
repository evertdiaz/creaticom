var express = require('express')
var router = express.Router()
var apiURL = require('../config/api').url
var request = require('request')

router.get('/', (req, res) => {
  request(apiURL + '/obrasfull', {json:req.body}, (err1, resp1, body1) => {
    request(apiURL + '/categoriasfull', {json:req.body}, (err2, resp2, body2) => {
      request(apiURL + '/subcategoriasfull', {json:req.body}, (err3, resp3, body3) => {
        console.log('=====OBRAS:', body1)
        console.log('=====Categorias:', body2)
        console.log('=====Subcategoras:', body3)
        res.render('landing/index', { title: 'CREATICOM', categorias:body2, subcategorias:body3, obras:body1 })        
      })
    })
  })
})

router.get('/search/artist', (req, res) => {
  request(apiURL + '/search/artist', {json: req.query}, (error, response, body) => {
    if (error) return res.send(error)
    res.render('landing/search/artist', { title: 'Busqueda',  data: response.body })
  })
})

router.get('/search/obra', (req, res) => {
  request(apiURL + '/search/obra', {json: req.query}, (error, response, body) => {
    res.render('landing/search/obra', { title: 'Busqueda', data: response.body})
  })
})

module.exports = router
