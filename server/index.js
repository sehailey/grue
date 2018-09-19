const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 1337

app.use("/api", require("./api"))

if (process.env.NODE_ENV !== "production") require("./.env.development")

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname, "build"))
}

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
