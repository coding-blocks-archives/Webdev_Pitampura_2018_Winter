const express = require('express')
const path = require('path')
const app = express()
const tasks = require('./tasks')


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.set('view engine', 'hbs')


app.get('/tasks', (req, res) => {
  // res.send(tasks.getTasks())
  res.render('tasks', {
    tasks: tasks.getTasks()
  })
})

app.post('/tasks', (req, res) => {

  tasks.addTask(req.body, () => {
    res.redirect('/tasks')
  })
})

app.use('/', express.static(
  path.join(__dirname, 'public')
))


tasks.loadTasks(() => {
  app.listen(4987, () => {
    console.log("Started on http://localhost:4987")
  })
})
