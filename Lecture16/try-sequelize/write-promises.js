const Sequelize = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'test.db'),
  logging: true
})

const Tasks = db.define('tasks', {
  name: Sequelize.STRING,
  done: Sequelize.BOOLEAN
})

db.sync()
  .then(() => Tasks.create({
    name: 'another task',
    done: false
  }))
  .then((task) => task.update({
    done: true
  }))
  .then(task => console.log(task))
  .catch(console.error)
