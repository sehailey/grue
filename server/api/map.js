const router = require("express").Router()
//const { Map } = require("../db/models/map")
module.exports = router

router.get("/", async (req, res, next) => {
  try {
    await res.json({ map: "map" })
  } catch (err) {
    next(err)
  }
})
