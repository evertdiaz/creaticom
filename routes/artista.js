var express = require('express')
var router = express()

router.get('/all', function (req, res) {
  res.render('artista/all', { title: 'Artistas' })
})

router.get('/:username', function (req, res) {
  res.render('artista/single', { artist: req.params.username, title: 'Artista ' + req.params.username })
})

module.exports = router
