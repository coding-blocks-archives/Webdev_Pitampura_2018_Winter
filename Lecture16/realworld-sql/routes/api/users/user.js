const Router = require('express').Router

const route = Router()

// Fetch myself
route.get('/', (req, res) => {
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

// Update user
route.put('/', (req, res) => {
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
