var express = require('express')
var router = express()

router.get('/', function (req, res) {
  res.render('auth/index', { title: 'Ingresar' })
})

module.exports = router
