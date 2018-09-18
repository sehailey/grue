const router = require("express").Router()
const { Item, Room } = require("../db/models")
module.exports = router

router.get("/", async (req, res, next) => {
  try {
    const rooms = await Room.findAll({ include: Item })
    res.json(rooms)
  } catch (err) {
    next(err)
  }
})
