const express = require('express')
const session = require('express-session')
const {
  db,
  Users
} = require('./models')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.set('view engine', 'hbs')

app.use(session({
  secret: '24khbkhb6k24hjb626',
  resave: false,
  saveUninitialized: true
}))

app.get('/login', (req, res) => res.render('login'))
app.get('/signup', (req, res) => res.render('signup'))

app.post('/signup', async (req, res) => {
  try {
    const user = await Users.create({
      username: req.body.username,
      password: req.body.password
    })
    if (!user) throw new Error('Error creating user')

    return res.redirect('/login')
  } catch (e) {
    res.redirect('/signup')
  }


})

app.post('/login', (req, res) => {

})

db.sync()
  .then(() => {
    app.listen(9876, () => {
      console.log('Started on http://localhost:9876')
    })
  })
