const express = require("express");
const router = express.Router()
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");


router.post("/",authMiddleware,isAdmin, createProduct)
router.get("/:id",getaProduct)
router.get("/",getAllProduct)
router.post("/:id",authMiddleware,isAdmin, updateProduct)
router.delete("/:id",authMiddleware,isAdmin, deleteProduct)
module.exports = router