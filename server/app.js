const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const mongo = require('./util/database')
mongo();
const router = require('../routes/routers')

app.use("/", router);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())