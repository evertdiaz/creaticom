var express = require('express')
var router = express.Router()
var Category = require('../models/category')
var User = require('../models/user')
var Obra = require('../models/obra')

router.get('/', (req, res) => {
  res.send('Welcome')
})

router.post('/category', (req, res) => {
  var newCategory = new Category()
  newCategory.name = req.body.name
  newCategory.description = req.body.description
  newCategory.save((err, savedCategory) => {
    if (err) res.send(err)
    res.send(savedCategory)
  })
})

router.get('/users', (req, res) => {
  User.find((err, foundUsers) => {
    res.send(foundUsers)
  })
})

router.post('/user', (req, res) => {
  User.findOne({$or: [{'username': req.body.username}, {'email': req.body.email}]}, (err, foundUser) => {
    if (err) return res.send(err)
    if (foundUser) return res.status(402).send({ message: 'Usuario ya existe' })
    var newUser = new User()
    newUser.username = req.body.username || ''
    newUser.name = req.body.name || ''
    newUser.bio = req.body.bio || ''
    newUser.email = req.body.email || ''
    newUser.password = req.body.password || ''
    newUser.phone = req.body.phone || null
    newUser.isArtist = req.body.isArtist || false
    newUser.fanpage = req.body.fanpage || ''
    newUser.portafolio = req.body.portafolio || ''
    newUser.web = req.body.web || ''
    newUser.obras = req.body.obras || []
    newUser.save((err, savedUser) => {
      if (err) return res.status(404).send(err)
      res.status(200).send(savedUser)
    })
  })
})

router.post('/user/update', (req, res) => {
  User.findOne({_id: req.body.id}, (err, foundUser) => {
    if (err) return res.send(err)
    foundUser.username = req.body.username
    foundUser.name = req.body.name
    foundUser.email = req.body.email
    foundUser.bio = req.body.bio
    foundUser.phone = req.body.phone
    foundUser.portafolio = req.body.portafolio
    foundUser.fanpage = req.body.fanpage
    foundUser.web = req.body.web
    foundUser.save((err, savedUser) => {
      if (err) return res.send(err)
      res.status(200).send({message: 'Datos Actualizados!'})
    })
  })
})

router.get('/user/:id', (req, res) => {
  User.findOne({_id: req.params.id}, (err, foundUser) => {
    if (err) return res.status(500).send(err)
    res.status(200).send(foundUser)
  })
})

router.post('/obra', (req, res) => {
  var newObra = new Obra()
  newObra.name = req.body.name
  newObra.description = req.body.description
  newObra.month = req.body.month
  newObra.year = req.body.year
  newObra.author = req.body.author
  newObra.category = req.body.category
  newObra.save((err, obraSaved) => {
    if (err) return res.send(err)
    // El valor del id reemplazarlo por el que viene en el req
    User.findOne({_id: req.body.user_id}, (error, foundUser) => {
      console.log('USUARIO: ' + foundUser.username)
      if (error) return res.send(error)
      foundUser.obras = foundUser.obras.concat(obraSaved._id)
      foundUser.save((err, updatedUser) => {
        if (err) return res.send(err)
        res.send({message: 'OK'})
      })
    })
  })
})

router.post('/auth', (req, res) => {
  User.findOne({$or: [{'username': req.body.user}, {'email': req.body.user}], 'password': req.body.password}, (err, foundUser) => {
    if (err) return res.status(500).send(err)
    if (!foundUser) return res.status(500).send({message: 'Usuario o contraseña Invalido'})
    res.status(200).send(foundUser)
  })
})

router.get('/obras/:idAutor', (req, res) => {
  User
  .findOne({_id: req.params.idAutor})
  .populate({
    path: 'obras',
    populate: { path: 'category' }
  })
  .exec((err, userFinal) => {
    if (err) return res.send(err)
    res.send(userFinal.obras)
  })
})

router.get('/obra/:id', (req, res) => {
  Obra.findOne({_id: req.params.id}, (err, foundObra) => {
    if (err) return res.send(err)
    res.status(200).send(foundObra)
  })
})

router.post('/obra/update/:id', (req, res) => {
  Obra.findOne({_id: req.params.id}, (err, foundObra) => {
    foundObra.name = req.body.name
    foundObra.description = req.body.description
    foundObra.month = req.body.month
    foundObra.year = req.body.year
    foundObra.category = req.body.category
    foundObra.save((err, savedObra) => {
      if (err) return res.send(err)
      res.status(200).send({message: 'OK'})
    })
  })
})

router.get('/category', (req, res) => {
  Category.find((err, foundCategories) => {
    if (err) return res.send(err)
    res.status(200).send(foundCategories)
  })
})

router.get('/search/artist', (req, res) => {
  User.find({$text: {$search: req.body.query}}, (err, foundUsers) => {
    if (err) return res.send(err)
    res.send(foundUsers)
  })
})

router.get('/search/obra', (req, res) => {
  Obra.find({$text: {$search: req.body.query}}, (err, foundObras) => {
    if (err) return res.send(err)
    res.send(foundObras)
  })
})

router.get('/artistas', (req, res) => {
  User
  .find()
  .populate({
    path: 'obras',
    populate: {path:'category'}
  })
  .exec((err, foundUsers) => {
    if (err) return res.send(err)
    res.send(foundUsers)
  })
})

router.get('/artista/:username', (req, res) => {
  User
  .findOne({username: req.params.username})
  .populate({
    path: 'obras',
    populate: { path: 'category'}
  })
  .exec((err, foundUser) => {
    if (err) return res.send(err)
    res.send(foundUser)
  })
})

module.exports = router
