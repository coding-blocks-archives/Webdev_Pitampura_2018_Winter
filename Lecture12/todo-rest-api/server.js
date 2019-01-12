const express = require('express')
const app = express()

let tasks = []
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
  console.log(req.body)
  tasks.push(req.body)
  res.status(201).send({
    success: true,
    id: tasks.length - 1
  })
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
  res.status(202).send({
    success: true
  })
})


app.listen(4567, () => {
  console.log("Started on http://localhost:4567")
})
