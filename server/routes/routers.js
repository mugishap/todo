const express = require('express');
const { getAllTodos, getTodoByUsername, newTodo } = require('../controllers/todo');
const router = express.Router()
router.post("/newTodo", newTodo)
router.get("/todos", getAllTodos)
router.get("/todos/:username", getTodoByUsername)
router.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"this is home page"
    })
})
module.exports.router = router;