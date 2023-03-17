const express = require('express')
const router = express.Router()
const data = require('./prices.json')

/* GET products listing. */
router.get('/', function (req, res, next) {
  res.header('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

/* GET product listing. */
router.get('/:id', function (req, res, next) {
  const product = data.find((product) => product.id === req.params.id)
  if (product) {
    res.header('Content-Type', 'application/json')
    res.send(JSON.stringify(product))
  } else {
    res.status(404).send('Not found')
  }
})

module.exports = router
