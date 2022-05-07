const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    username: {
        type: String
    },
    time: {
        type: String
    },
    content: {
        type: String
    },
    doneStatus: {
        type: Boolean,
        default: false
    }
})
module.exports.todoSchema = mongoose.model('todos', todoSchema)