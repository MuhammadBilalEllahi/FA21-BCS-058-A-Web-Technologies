const express = require("express")
const router = express.Router()
const {createUser, loginUserController, getAllUsers, getaUser, deleteaUser, updateaUser, blockUser, unBlockUser, handleRefreshToken, logout} = require("../controller/userController")
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware")

router.post("/register", createUser)
router.post("/login", loginUserController)
router.get("/get-users",getAllUsers)
router.get("/refresh", handleRefreshToken)
router.get("/logout", logout)



router.get("/get-a-user/:id",authMiddleware,isAdmin, getaUser)
router.put("/delete-a-user/:id", deleteaUser)
router.put("/update-a-user/:id", authMiddleware,updateaUser)

router.put("/block-user/:id", authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id", authMiddleware,isAdmin,unBlockUser)


module.exports = router;