const path = require('path')
const fs = require('fs')

let tasks = []

const DATA_FILE = path.join(__dirname, 'tasks.json')

function loadTasks(done) {
  fs.readFile(
    DATA_FILE,
    (err, data) => {
      if (err)  {
        console.error(err)
        done()
      }

      if (data) {
        tasks = JSON.parse(data.toString())
        done()
      }
    }
  )
}

function saveTasks(done) {
  fs.writeFile(
    DATA_FILE,
    JSON.stringify(tasks),
    (err) => {
      if (err) console.error(err)
      done()
    }
  )
}

function addTask(newTask, done) {
  tasks.push(newTask)
  saveTasks(done)
}

function getTaskById(taskId) {
  return tasks[taskId]
}

function modifyTask(taskId, updatedTask, done) {
  tasks[taskId] = Object.assign(tasks[taskId], updatedTask)
  saveTasks(done)
}

function getTasks() {
  return tasks
}

module.exports = {
  loadTasks,
  addTask,
  getTaskById,
  modifyTask,
  saveTasks,
  getTasks
}
