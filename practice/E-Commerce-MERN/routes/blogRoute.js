const express = require("express")
const { createBlog, updateBlog, getBlog } = require("../controller/blockController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/',authMiddleware,isAdmin,createBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.get('/get-blog/:id',getBlog)


module.exports = router