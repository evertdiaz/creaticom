// Dependencias
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var bp = require('body-parser')
var jwt = require('jsonwebtoken')
var morgan = require('morgan')
var cors = require('cors')
var app = express()

// Middlewares Iniciales
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3000

// Routers 
var landing = require('./routes/landing')
var api = require('./routes/api')

// Rutas
app.use('/', landing)
app.use('/api', api)

// Iniciacion del Server
app.listen(port, function() {
	console.log('App Iniciada en puerto: ' + port)
})