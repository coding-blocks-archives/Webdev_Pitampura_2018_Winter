const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'jg34hvtj3h4tvi3h4tib',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

app.use((req, res, next) => {
  console.log(req.session)
  next()
})

app.get('/page1', (req, res) => {
  res.send('Welcome ' +
    (req.session.page1 ? 'back ' : '') +
    'to page 1')
  req.session.page1 = 'true'
})

app.get('/page2', (req, res) => {
  res.send('Welcome ' +
    (req.session.page1 ? 'back ' : '') +
    'to page 2')
  req.session.page2 = 'true'
})

app.get('/page3', (req, res) => {
  res.send('Welcome ' +
    (req.session.page1 ? 'back ' : '') +
    'to page 3')
  req.session.page3 = true
})

app.listen(8888)
