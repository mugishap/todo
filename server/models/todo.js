const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    time: {
        type: new Date().getTime()
    },
    content: {
        type: String,
        required:true
    },
    doneStatus: {
        type: Boolean,
        default: false
    }
})
module.exports.todoSchema = mongoose.model('todos', todoSchema)