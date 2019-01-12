const app = require('express')()

app.use('/a', (req, res, next) => {
  console.log('middleware a running')
  next()
  // res.send('hello from A')
})

app.use('/a/b', (req, res, next) => {
  console.log('middleware a/b running')
  next()
})

// app.use((req, res) => {
//   res.send('Hello')
// })

app.listen(4321, () => {
  console.log('Server started on http://localhost:4321')
})
