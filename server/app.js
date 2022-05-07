const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConnection = require('./util/database')
const app = express()
const mongo = require('./util/database')
const PORT = process.env.PORT || 3000
require('dotenv').config()
mongo();

//db connection
dbConnection();

//server connection
app.listen(PORT, (err, con) => {
    if (err) {
        console.log("failed to connect to database")
    } else {
        console.log("connected to database")
    }
})

//server connection


const router = require('../routes/routers')
app.use("/", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())