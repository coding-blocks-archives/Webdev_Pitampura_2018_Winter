const express = require('express')

const app = express()


app.get('/login', (req, res) => {
  res.render('login')
})

let user = undefined;

app.post('/login', (req, res) => {
  // req.body.user -> {password == req.body.password}

  if ( /*... */ ) {
    user = {/*...*/ }
    res.redirect('/profile')

  } else {
    res.redirect('/login')
  }

})


app.get('/profile', (req, res) => {
  res.send
})

app.listen(4444)
