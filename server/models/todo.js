const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: new Date().getTime()
    },
    content: {
        type: String,
        required: true
    },
    doneStatus: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('todos', todoSchema)