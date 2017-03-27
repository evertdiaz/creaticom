var express = require('express')
var router = express.Router()
var apiURL = require('../config/api').url
var request = require('request')

router.get('/', (req, res) => {
  res.render('landing/index', { title: 'CREATICOM' })
})

router.get('/search/artist', (req, res) => {
  request(apiURL + '/search/artist', {json: req.query}, (error, response, body) => {
    res.render('landing/search/artist', { title: 'Busqueda',  data: response.body })
  })
})

router.get('/search/obra', (req, res) => {
  request(apiURL + '/search/obra', {json: req.query}, (error, response, body) => {
    res.render('landing/search/obra', { title: 'Busqueda', data: response.body})
  })
})

module.exports = router
