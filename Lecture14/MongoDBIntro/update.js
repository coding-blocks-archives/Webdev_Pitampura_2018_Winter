// Created by bhavyaagg on 2019-01-19

const {MongoClient} = require('mongodb')
const MONGO_URL = "mongodb://localhost:27017"

MongoClient.connect(MONGO_URL, (err, client)=> {
  if( err) throw err;

  const tododb = client.db("tododb")

  const todos = tododb.collection("todos")

  todos.updateMany({
    priority: 3
  }, {
    $set: {
      task: "New Task"
    }
  }, (err, result) => {
    if(err) throw err;
    console.log(result)
  })
})