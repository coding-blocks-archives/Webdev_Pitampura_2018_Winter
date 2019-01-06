const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(req.query)
  console.log(req.headers)
  if (req.query.name) {
    res.send('Hello ' + req.query.name)
  }
  res.send('<h1>Hello</h1>')
})

app.get('/abc', (req, res) => {
  res.send('ABC')
})

app.listen(4000)
