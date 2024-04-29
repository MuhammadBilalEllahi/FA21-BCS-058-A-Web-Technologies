
const express = require("express")
const router = express.Router()

const authController = require("../controller/authController")

router.post("/", authController.handleLogin)

router.get("/",(res,req)=>{
    req.send({"message":"Auth PAge"})
})

module.exports = router;