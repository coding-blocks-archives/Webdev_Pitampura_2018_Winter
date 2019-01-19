// Created by bhavyaagg on 2019-01-19

const {MongoClient} = require('mongodb')
const MONGO_URL = "mongodb://localhost:27017"

MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) throw err;

  const tododb = client.db("tododb")

  const todos = tododb.collection("todos")

  // Find All
  todos.find({}).toArray((err, results) => {
    console.log(results)
  })

  // Find on basis of a condition
  todos.find({
    priority: 3
  }).toArray((err, results) => {
    console.log(results)
  })

  // Find all having priority greater than 1
  todos.find({
    priority: {
      $gt: 1
    }
  }).toArray((err, results) => {
    console.log(results)
  })

  // Find all where priority exists
  todos.find({
    priority: {
      $exists: true
    }
  }).toArray((err, results) => {
    console.log(results)
  })

  // Find all where priority exists AND priority greater than 1
  todos.find({
    $and: [{
      priority: {
        $exists: true
      }
    }, {
      priority: {
        $gt: 1
      }
    }]
  }).toArray((err, results) => {
    console.log(results)
  })
})