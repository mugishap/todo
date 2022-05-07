const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    user: {
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