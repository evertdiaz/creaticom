var express = require('express')
var request = require('request')
var apiURL = require('../config/api').url
var router = express()

router.get('/all', (req, res) => {
  request(apiURL + '/artistas', {json: req.body}, (error, response, body) => {
    res.render('artista/all', { title: 'Artistas', data: response.body })  
  })
})

router.get('/:username', (req, res) => {
  request(apiURL + '/artista/' + req.params.username, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    if(response.body.isArtist) res.render('artista/single', { data: response.body, title: 'Artista ' + req.params.username })  
    else res.render('artista/single', { data: {alert: 'No existe Artista'}, title: 'Artista ' + req.params.username })  
    
  })
})

module.exports = router
