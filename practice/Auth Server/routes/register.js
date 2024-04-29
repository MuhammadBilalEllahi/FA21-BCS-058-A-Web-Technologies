
const express = require("express")
const router = express.Router()

const registerController = require("../controller/registerController")

router.post("/", registerController.handleNewUser)

router.get("/",(res,req)=>{
    req.send({"message":"Hi"})
})

module.exports = router;