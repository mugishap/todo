const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')
const app = express()
const mongo = require('./util/database')
const PORT = process.env.PORT || 3000
require('dotenv').config()

//db connection
mongo();



//server connection
app.listen(PORT, (err, con) => {
    if (err) {
        console.log("failed to connect to the server")
    } else {
        console.log(`The server is connected on port ${PORT}`)
    }
})

//server connection


const {router} = require('./routes/routers')
app.use("/", router);
app.use(compression())
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())