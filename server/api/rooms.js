const router = require("express").Router()
const { Room } = require("../db/models")
module.exports = router

router.get("/", async (req, res, next) => {
  try {
    const rooms = await Room.findAll()
    res.json(rooms)
  } catch (err) {
    next(err)
  }
})
