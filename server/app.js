const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(bodyParser.json())

const dbConnection = () => {
 mongoose.connect   
}