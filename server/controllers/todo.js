const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

exports.getAllTodos = async(req , res)=>{
   
        const todos = await Todo.find()
        if(!todos) return res.status(200).send('There are no todos Want to add Some')
        res.status(200).send(todos)
    
}

exports.getTodoByUsername = async(req , res)=>{
   
    const username = req.params.username
    const todo = await Todo.find({username:username})
    if(!todo) return res.status(200).send(`The Todo with username ${username} was not found`)
    res.status(200).send(todo)
}