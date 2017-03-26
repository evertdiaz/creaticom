var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('landing/index', { title: 'CREATICOM' })
})

router.get('/search', function (req, res) {
  res.render('landing/search', { data: req.query, title: 'Busqueda' })
})

module.exports = router
