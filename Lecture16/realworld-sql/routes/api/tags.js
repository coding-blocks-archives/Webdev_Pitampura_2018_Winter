const Router = require('express').Router
const {
  fetchAllTags
} = require('../../controllers/tags')

const route = Router()

route.get('/', async (req, res) => {
  const tags = await fetchAllTags()


  res.send({
    tags: tags.map(t => t.name)
  })
})

module.exports = route
