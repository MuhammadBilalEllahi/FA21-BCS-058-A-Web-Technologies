const express = require("express")
const { createBlog } = require("../controller/blockController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/',authMiddleware,isAdmin,createBlog)
module.exports = router