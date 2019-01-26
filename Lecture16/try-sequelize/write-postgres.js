const Sequelize = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'postgres',
  database: 'sampledb3',
  username: 'sampleuser3',
  password: 'samplepass3',
  logging: true
})

const Tasks = db.define('tasks', {
  name: Sequelize.STRING,
  done: Sequelize.BOOLEAN
})

async function dbops() {
  await db.sync()
  let task = await Tasks.create({
    name: 'another task',
    done: false
  })
  console.log('======================')
  console.log(task)
  console.log('======================')

  task.done = true
  console.log('======================')
  console.log(task)
  console.log('======================')

  await task.save()
  console.log('======================')
  console.log(task)
  console.log('======================')



}

dbops()
