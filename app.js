// Dependencias
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var bp = require('body-parser')
var morgan = require('morgan')
var cors = require('cors')
var stylus = require('stylus')
var app = express()
var compileStylus = require('./utils/stylus')

// Middlewares Iniciales
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(morgan('dev'))
app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(stylus.middleware(
  {
    src: path.join(__dirname, '/public'),
    compile: compileStylus
  }))
app.use(express.static(path.join(__dirname, 'public')))
var port = process.env.PORT || 3000

// Routers
var landing = require('./routes/landing')
var api = require('./routes/api')
var artista = require('./routes/artista')
var perfil = require('./routes/perfil')
var auth = require('./routes/auth')
var obra = require('./routes/obra')

// BD
mongoose.connect('mongodb://localhost/testdb')

// Rutas
app.use('/', landing)
app.use('/perfil', perfil)
app.use('/artista', artista)
app.use('/auth', auth)
app.use('/obra', obra)
app.use('/api', api)

// Iniciacion del Server
app.listen(port, function () {
  console.log('App Iniciada en puerto: ' + port)
})
