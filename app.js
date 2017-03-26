// Dependencias
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bp = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const stylus = require('stylus')
const app = express()

// Configuraciones
var compileStylus = require('./utils/stylus')
var dbConfig = require('./config/dbConfig')

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
mongoose.connect(dbConfig.url)

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
