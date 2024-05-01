const express = require("express")
const router = express.Router()
const {createUser, loginUserController, getAllUsers} = require("../controller/userController")

router.post("/register", createUser)
router.post("/login", loginUserController)
router.get("/get-all",getAllUsers)

module.exports = router;