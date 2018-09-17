const router = require("express").Router()
//const { Item } = require("../db/models")
module.exports = router

router.get("/", async (req, res, next) => {
  try {
    //const items = await Item.findAll()
    res.json({ express: "Hello From Items" })
  } catch (err) {
    next(err)
  }
})

router.get("/hello", (req, res) => {
  res.send({ express: "Hello From Items" })
})
