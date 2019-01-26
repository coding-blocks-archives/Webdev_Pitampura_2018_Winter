const express = require('express')
const db = require('./db/models').db

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


app.use('/api', require('./routes/api'))

db.sync().then(() => {
  app.listen(4567, () => {
    console.log('Started on http://localhost:4567')
  })
})
