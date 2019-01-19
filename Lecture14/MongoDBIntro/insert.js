// Created by bhavyaagg on 2019-01-19
// Previous
// const MongoClient = require('mongodb').MongoClient
// Better
const {MongoClient} = require('mongodb')
const MONGO_URL = "mongodb://localhost:27017"

MongoClient.connect(MONGO_URL, (err, client)=> {
  if( err) throw err;

  const tododb = client.db("tododb")

  const todos = tododb.collection("todos")


  todos.insertMany([
    {
      task: "2nd task",
      priority: 3,
      owner: 'admin'
    },
    {
      task: "3rd task",
      owner: 'admin',
      priority: 2
    }
  ], (err, results) => {
    if( err) throw err;
    console.log(results)
  })


})