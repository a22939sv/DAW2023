var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

var indexRouter = require('./routes/index')
var productsRouter = require('./routes/products')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/products', productsRouter)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})

module.exports = app
