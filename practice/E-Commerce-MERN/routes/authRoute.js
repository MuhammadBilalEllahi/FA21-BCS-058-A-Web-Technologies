const express = require("express")
const router = express.Router()
const {createUser, loginUserController, getAllUsers, getaUser, deleteaUser, updateaUser} = require("../controller/userController")
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

router.post("/register", createUser)
router.post("/login", loginUserController)
router.get("/get-users",getAllUsers)
router.get("/get-a-user/:id",authMiddleware,isAdmin, getaUser)
router.get("/delete-a-user/:id", deleteaUser)
router.get("/update-a-user/:id", updateaUser)

module.exports = router;