const express = require("express");
const router = express.Router()
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addToWishList } = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");


router.post("/", authMiddleware, isAdmin, createProduct)
router.post("/:id", authMiddleware, isAdmin, updateProduct)

router.put("/wishlist", authMiddleware, addToWishList)

router.get("/:id", getaProduct)
router.get("/", getAllProduct)

router.delete("/:id", authMiddleware, isAdmin, deleteProduct)
module.exports = router