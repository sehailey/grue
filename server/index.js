const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 1337

app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
