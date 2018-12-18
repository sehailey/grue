const router = require('express').Router()
module.exports = router

const message = require('./message')
router.use('/items', require('./items'))
router.use('/locations', require('./locations'))
router.get('/', (req, res, next) => {
  try {
    res.json(message)
  } catch (e) {
    console.log(e)
  }
})
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
