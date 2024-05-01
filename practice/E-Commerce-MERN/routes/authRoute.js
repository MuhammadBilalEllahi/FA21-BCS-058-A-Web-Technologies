const express = require("express")
const router = express.Router()
const {createUser, loginUserController, getAllUsers, getaUser, deleteaUser} = require("../controller/userController")

router.post("/register", createUser)
router.post("/login", loginUserController)
router.get("/get-users",getAllUsers)
router.get("/get-a-user/:id", getaUser)
router.get("/delete-a-user/:id", deleteaUser)

module.exports = router;