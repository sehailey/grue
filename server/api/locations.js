const router = require('express').Router()
const { Location, Item } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const locations = await Location.findAll({ include: [Item] })
    res.json(locations)
  } catch (err) {
    next(err)
  }
})
