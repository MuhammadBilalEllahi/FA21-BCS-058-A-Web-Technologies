const express = require("express");
const router = express.Router()
const { createProduct, getaProduct, getAllProduct, updateProduct } = require("../controller/productController");


router.post("/",createProduct)
router.get("/:id",getaProduct)
router.get("/",getAllProduct)
router.get("/:id",updateProduct)
module.exports = router