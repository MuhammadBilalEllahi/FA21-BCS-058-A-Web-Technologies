const express = require("express");
const { createProductCategory, getAllProductCategory, updateProductCategory, deleteProductCategory, getaProductCategory } = require("../controller/productCategoryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createProductCategory)

router.put("/:id", authMiddleware, isAdmin, updateProductCategory)

router.get("/:id", getaProductCategory)
router.get("/", getAllProductCategory)


router.delete("/:id", authMiddleware, isAdmin, deleteProductCategory)

module.exports = router;
