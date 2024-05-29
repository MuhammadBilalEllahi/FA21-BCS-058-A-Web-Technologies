const express = require("express");
const { createEnquiry, getAllEnquiry, updateEnquiry, deleteEnquiry, getaEnquiry } = require("..//controller/enquiryController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware")

const router = express.Router()


router.post("/", authMiddleware, isAdmin, createEnquiry)

router.put("/:id", authMiddleware, isAdmin, updateEnquiry)

router.get("/:id", getaEnquiry)
router.get("/", getAllEnquiry)


router.delete("/:id", authMiddleware, isAdmin, deleteEnquiry)

module.exports = router;
