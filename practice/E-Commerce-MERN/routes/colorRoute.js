const express = require("express");
const { createColor, getAllColor, updateColor, deleteColor, getaColor } = require("..//controller/colorController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createColor)

router.put("/:id", authMiddleware, isAdmin, updateColor)

router.get("/:id", getaColor)
router.get("/", getAllColor)


router.delete("/:id", authMiddleware, isAdmin, deleteColor)

module.exports = router;
