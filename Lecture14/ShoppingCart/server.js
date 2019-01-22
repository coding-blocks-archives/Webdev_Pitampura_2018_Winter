// Created by bhavyaagg on 2019-01-19
const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

const MONGO_URL = "mongodb://localhost:27017"


app.use('/', express.static(__dirname + '/public_html'))

app.get('/products', (req, res) => {
  MongoClient.connect(MONGO_URL, (err, client) => {
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        msg: "Could Not Connect To Mongo Database"
      })
    }

    const cartDB = client.db("cartdb")
    const products = cartDB.collection("products")

    products.find({}).toArray((err, results) => {
      res.json({
        success: true,
        data: results
      })
    })

    client.close()

  })
})

app.listen(1234, () => {
  console.log("Server Running")
})