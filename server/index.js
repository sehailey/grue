const express = require("express")
var graphqlHTTP = require("express-graphql")
var { buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var root = { hello: () => "Hello world!" }

const app = express()
const port = process.env.PORT || 1337

app.use("/api", require("./api"))

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
