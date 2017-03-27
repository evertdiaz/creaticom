var express = require('express')
var router = express()
var apiURL = require('../config/api').url
var request = require('request')

router.get('/all', function (req, res) {
  request(apiURL + '/obras', {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.render('obra/all', { title: 'Obras', data: response.body })
  })
})
router.get('/:id', function (req, res) {
  request(apiURL + '/obra/' + req.params.id, {json: req.body}, (error, response, body) => {
    if (error) return res.send(error)
    res.render('obra/single', { data: response.body, title: 'Obra ' + response.body.name })
  })
})

module.exports = router
