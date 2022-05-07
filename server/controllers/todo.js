const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

exports.getAllTodos = async(req, res) => {

    const todos = await Todo.find()
    if (!todos) return res.status(200).send('There are no todos Want to add Some')
    res.status(200).send(todos)

}

exports.getTodoByUsername = async(req, res) => {

    const username = req.params.username
    const todo = await Todo.find({ username: username })
    if (!todo) return res.status(200).send(`The Todo with username ${username} was not found`)
    res.status(200).send(todo)
}

const newTodo = async(req, res) => {
    const { username, content } = req.body
    const todo = new Todo({
        username: username,
        content: content
    })
    await todo.save((err, todo) => {
        if (err) {
            res.json({
                status: 500,
                message: "failed to add todo",
                error: err.message
            })
        } else {
            res.json({
                status: 200,
                message: "todo added successfully",
                data: todo
            })
        }
    })
}

module.exports.newTodo = newTodo