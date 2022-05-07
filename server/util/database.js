const mongoose = require('mongoose')
module.exports = function() {
    mongoose.connect(process.env.DB_URL, (err, con) => {
        if (err) {
            console.log("failed to connect due to " + err)
        } else {
            console.log("connected to mongodb")
        }
    })
}