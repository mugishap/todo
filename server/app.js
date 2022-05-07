const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(bodyParser.json())

const dbConnection = () => {
    mongoose.connect(process.env.DB_URL, () => {
        console.log('Connected to database.....')
    })
}
dbConnection()