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
  req.session.page1 = req.session.page1 || 0
  req.session.page2 = req.session.page2 || 0
  req.session.page3 = req.session.page3 || 0
  console.log(req.session)
  next()
})

app.get('/page1', (req, res) => {
  req.session.page1++
  res.send('Welcome ' +
    (req.session.page1 > 1 ? 'back ' : '') +
    'to page 1')
})

app.get('/page2', (req, res) => {
  req.session.page2++
  res.send('Welcome ' +
    (req.session.page2 > 1 ? 'back ' : '') +
    'to page 2')
})

app.get('/page3', (req, res) => {
  req.session.page3++
  res.send('Welcome ' +
    (req.session.page3 > 1 ? 'back ' : '') +
    'to page 3')

})

app.listen(8888)
