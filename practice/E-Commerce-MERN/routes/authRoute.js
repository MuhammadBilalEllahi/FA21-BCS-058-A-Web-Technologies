const express = require("express")
const router = express.Router()
const {createUser, loginUserController, getAllUsers, getaUser, deleteaUser, updateaUser, blockUser, unBlockUser} = require("../controller/userController")
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

router.post("/register", createUser)
router.post("/login", loginUserController)
router.get("/get-users",getAllUsers)
router.get("/get-a-user/:id",authMiddleware,isAdmin, getaUser)
router.get("/delete-a-user/:id", deleteaUser)
router.get("/update-a-user/:id", authMiddleware,updateaUser)

router.get("/block-user/:id", authMiddleware,isAdmin,blockUser)
router.get("/unblock-user/:id", authMiddleware,isAdmin,unBlockUser)

module.exports = router;