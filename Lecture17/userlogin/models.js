const Sequelize = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'users.db')
})

const Users = db.define('user', {
  username: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
})

module.exports = {
  db, Users
}
