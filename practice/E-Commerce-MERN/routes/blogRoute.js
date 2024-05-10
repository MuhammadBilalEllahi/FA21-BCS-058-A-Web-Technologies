const express = require("express")
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog } = require("../controller/blockController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/', authMiddleware, isAdmin, createBlog)
router.put('/likes', authMiddleware, likeBlog)
router.get('/', getAllBlogs)
router.put('/:id', authMiddleware, isAdmin, updateBlog)
router.get('/:id', getBlog)
router.delete('/:id', authMiddleware, isAdmin, deleteBlog)



module.exports = router