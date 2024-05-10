const express = require("express");
const { createBlogCategory, getAllBlogCategory, updateBlogCategory, deleteBlogCategory, getaBlogCategory } = require("../controller/blogCatController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createBlogCategory)

router.put("/:id", authMiddleware, isAdmin, updateBlogCategory)

router.get("/:id", getaBlogCategory)
router.get("/", getAllBlogCategory)


router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory)

module.exports = router;
