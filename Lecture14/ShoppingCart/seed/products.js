// Created by bhavyaagg on 2019-01-19
const {MongoClient} = require('mongodb')

const MONGO_URL = "mongodb://localhost:27017"


MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const cartDB = client.db("cartdb")
  const products = cartDB.collection("products")

  products.insertMany([
    {
      name: "Samsung Note 9",
      price: 90000,
      color: "Blue",
      price: 80000
    }, {
      name: "Apple MacBook Pro",
      year: 2015,
      color: "Silver",
      price: 150000

    }, {
      name: "Samsung TV",
      screenWidth: "55 inches",
      price: 55000
    }, {
      name: "Tshirt",
      color: "red",
      price: 1000
    }
  ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA INSERTED")
  })
})