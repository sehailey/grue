const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    await res.json({ map: 'map' })
  } catch (err) {
    next(err)
  }
})
