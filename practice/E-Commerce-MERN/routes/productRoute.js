const express = require("express");
const router = express.Router()
const {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    rating,
    uploadImages,
    deleteImages

} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImages");


router.post("/", authMiddleware, isAdmin, createProduct)
router.post("/:id", authMiddleware, isAdmin, updateProduct)

router.put("/upload/:id", authMiddleware, isAdmin, uploadPhoto.array('images', 10), productImgResize, uploadImages)
router.put("/wishlist", authMiddleware, addToWishList)
router.put("/ratings", authMiddleware, rating)

router.get("/:id", getaProduct)
router.get("/", getAllProduct)

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages)

router.delete("/:id", authMiddleware, isAdmin, deleteProduct)
module.exports = router