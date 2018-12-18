const router = require('express').Router()
module.exports = router

router.use('/items', require('./items'))
router.use('/locations', require('./locations'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
