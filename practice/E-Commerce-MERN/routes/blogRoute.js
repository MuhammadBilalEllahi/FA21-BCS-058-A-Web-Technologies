const express = require("express")
const { createBlog, updateBlog, getBlog, getAllBlogs } = require("../controller/blockController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/',authMiddleware,isAdmin,createBlog)
router.put('/:id',authMiddleware,isAdmin,updateBlog)
router.get('/get-blog/:id',getBlog)
router.get('/get-all-blogs',getAllBlogs)


module.exports = router