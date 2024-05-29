const express = require("express");
const { createCategory, getAllCategory, updateCategory, deleteCategory, getaCategory } = require("..//controller/categoryContoller");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createCategory)

router.put("/:id", authMiddleware, isAdmin, updateCategory)

router.get("/:id", getaCategory)
router.get("/", getAllCategory)


router.delete("/:id", authMiddleware, isAdmin, deleteCategory)

module.exports = router;
