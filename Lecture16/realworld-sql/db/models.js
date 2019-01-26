const Sequelize = require('sequelize')
const db = new Sequelize({
  dialect: 'mysql',
  database: 'sampledb3',
  username: 'sampleuser3',
  password: 'samplepass3',
  logging: true
})

const Articles = db.define('article', {

})

const Comments = db.define('comment', {

})

Comments.belongsTo(Articles)
Articles.hasMany(Comments)

const Tags = db.define('tag', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  }
}, {
  timestamps: false
})

Tags.belongsToMany(Articles, {through: 'article_tags'})
Articles.belongsToMany(Tags, {through: 'article_tags'})


module.exports = {
  db,
  Articles,
  Comments,
  Tags
}
