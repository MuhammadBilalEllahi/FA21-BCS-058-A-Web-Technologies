const express = require("express")
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, disLikeBlog } = require("../controller/blogController")
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")
const router = express.Router()


router.post('/', authMiddleware, isAdmin, createBlog)

router.put('/likes', authMiddleware, likeBlog)
router.put('/dislikes', authMiddleware, disLikeBlog)


// seperator

router.put('/:id', authMiddleware, isAdmin, updateBlog)

router.get('/:id', getBlog)
router.get('/', getAllBlogs)


router.delete('/:id', authMiddleware, isAdmin, deleteBlog)



module.exports = router