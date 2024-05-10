const express = require("express");
const { createBrand, getAllBrand, updateBrand, deleteBrand, getaBrand } = require("../controller/brandController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createBrand)

router.put("/:id", authMiddleware, isAdmin, updateBrand)

router.get("/:id", getaBrand)
router.get("/", getAllBrand)


router.delete("/:id", authMiddleware, isAdmin, deleteBrand)

module.exports = router;
