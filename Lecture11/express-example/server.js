const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.get('/abc', (req, res) => {
  res.send('ABC')
})

app.listen(4000)
