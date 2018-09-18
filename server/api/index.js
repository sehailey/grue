const router = require("express").Router()
module.exports = router

router.use("/items", require("./items.js"))
router.use("/rooms", require("./rooms.js"))
router.use("/map", require("./map.js"))

router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})
