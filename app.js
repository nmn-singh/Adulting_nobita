const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homerouter = require('./routers/homerouter');
const { Db } = require('mongodb');

const port = process.env.port || 5500


const app = express();



const uri = process.env.MONGODB_URI;
mongoose.connect(uri || "mongodb://0.0.0.0:27017/registered_user", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error",() => {
    console.log("error in connection");
})
db.once("open",() => {
    console.log("connected");
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/',homerouter)


app.listen(port)