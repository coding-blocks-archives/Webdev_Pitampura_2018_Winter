const Tags = require('../db/models').Tags

async function fetchAllTags() {
  return await Tags.findAll()
}

// SELECT * FROM tags


module.exports = {
  fetchAllTags
}
