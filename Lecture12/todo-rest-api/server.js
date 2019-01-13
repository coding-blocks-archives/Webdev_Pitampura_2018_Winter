const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

let DATA_FILE = path.join(__dirname, 'tasks.json')

let tasks = []

fs.readFile(DATA_FILE, (err, data) => {
  if (!err) {
    tasks = JSON.parse(data.toString())
  }
})

function addTask(task, done) {
  tasks.push(task)
  fs.writeFile(
    DATA_FILE,
    JSON.stringify(tasks),
    (err) => {
      if (!err) {
        done(tasks.length - 1)
      }
    }
  )
}

function writeTaskList(done) {
  fs.writeFile(
    DATA_FILE,
    JSON.stringify(tasks),
    (err) => {
      if (!err) {
        done()
      }
    }
  )
}


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.get('/tasks', (req, res) => {
  res.send(tasks)
})

app.post('/tasks', (req, res) => {
  if (typeof req.body.done === 'string') {
    req.body.done = (req.body.done == 'true')
  }
  if (req.body.name && req.body.name.trim().length > 0) {
    console.log(req.body)
    addTask(req.body, (taskId) => {
      res.status(201).send({
        success: true,
        id: tasks.length - 1
      })
    })

  } else {
    res.status(400).send({
      success: false,
      message: 'Task name cannot be empty'
    })
  }

})

app.get('/tasks/:id', (req, res) => {
  let taskId = parseInt(req.params.id)
  res.send(tasks[taskId])
})

app.patch('/tasks/:id', (req, res) => {
  let taskId = parseInt(req.params.id)
  if (typeof req.body.done === 'string') {
    req.body.done = (req.body.done == 'true')
  }
  if (!tasks[taskId]) {
    return res.status(404).send({
      success: false,
      message: 'Task with given task id not found'
    })
  }
  if (req.body.name) {
    tasks[taskId].name = req.body.name
  }
  tasks[taskId].done = req.body.done
  writeTaskList(() => {
    res.status(202).send({
      success: true
    })
  })

})

app.use('/', express.static(
  path.join(__dirname, 'public_html')
))

app.listen(4567, () => {
  console.log("Started on http://localhost:4567")
})
