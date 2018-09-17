const express = require("express")

const app = express()
const port = process.env.PORT || 1337

app.use("/api", require("./api"))

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
