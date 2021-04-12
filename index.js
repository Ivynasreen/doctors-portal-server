const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
 
app.use(cors());


const uri = "mongodb+srv://doctorSabrina:sabrina1234@cluster0.9d6zf.mongodb.net/doctorsPortal?retryWrites=true&w=majority";

const app = express()


const port = 5200;
app.get('/', function (req, res) {
  res.send('Hello World')
})
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("doctorsPortal").collection("appointment");

  });
app.listen(process.env.PORT || port)