var express = require('express')
var router = express()

router.get('/all', function (req, res) {
  res.render('obra/all', { title: 'Obras' })
})
router.get('/:id', function (req, res) {
  res.render('obra/single', { obra: req.params.id, title: 'Obra ' + req.params.id })
})

module.exports = router
