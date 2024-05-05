const express = require("express");
const router = express.Router()
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productController");
const { isAdmin } = require("../middlewares/authMiddleware");


router.post("/",isAdmin,createProduct)
router.get("/:id",getaProduct)
router.get("/",getAllProduct)
router.post("/:id",isAdmin,updateProduct)
router.delete("/:id",isAdmin,deleteProduct)
module.exports = router