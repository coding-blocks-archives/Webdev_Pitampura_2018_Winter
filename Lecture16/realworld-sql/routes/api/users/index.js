const Router = require('express').Router

const route = Router()

// Login
route.post('/login', (req, res) => {
  res.send({
    "user": {
      "email": "jake@jake.jake",
      "token": "jwt.token.here",
      "username": "jake",
      "bio": "I work at statefarm",
      "image": null
    }
  })
})

// Signup
route.post('/', (req, res) => {
  res.send({
    "user": {
      "email": "jake@jake.jake",
      "token": "jwt.token.here",
      "username": "jake",
      "bio": "I work at statefarm",
      "image": null
    }
  })
})

module.exports = route
