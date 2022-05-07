const express = require('express');
const {createNewContent}=require('../middleware/auth')
const { getAllContent,createNewContent, updateContent, deleteContent} = require('../controllers/userControllers');
const { route } = require('express/lib/application');
const router = express.Router()
router.post("/",createNewContent)
router.get("/", getAllContent)
router.put("/:id", updateContent)
router.delete("/:id",deleteContent);

module.exports.routers =router;