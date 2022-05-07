const express = require('express');
const { getAllTodos, getTodoByUsername, newTodo } = require('../controllers/todo');
const router = express.Router()
router.post("/newTodo", newTodo)
router.get("/todos", getAllTodos)
router.get("/todos/:username", getTodoByUsername)
router.put("/", updateContent)
router.delete("/:id", deleteContent);

module.exports.router = router;