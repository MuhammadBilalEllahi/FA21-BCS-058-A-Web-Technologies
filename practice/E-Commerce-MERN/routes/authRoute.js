const express = require("express")
const router = express.Router()
const {createUser, loginUserController} = require("../controller/userController")

router.post("/register", createUser)
router.post("/login", loginUserController)

module.exports = router;