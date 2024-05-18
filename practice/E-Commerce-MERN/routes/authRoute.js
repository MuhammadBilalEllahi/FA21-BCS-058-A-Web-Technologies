const express = require("express")
const router = express.Router()
const {
    createUser,
    loginUserController,
    getAllUsers,
    getaUser,
    deleteaUser,
    updateaUser,
    blockUser,
    unBlockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,

    loginAdminController,
    getWishList,
    saveUserAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
    // setWishList,


    loginUserGET,
    registerUserGET

} = require("../controller/userController")
const {
    authMiddleware,
    isAdmin } = require("../middlewares/authMiddleware")



router.post("/register", createUser)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.post("/login", loginUserController)
router.post("/admin-login", loginAdminController)
router.post("/cart", authMiddleware, userCart)
router.post("/cart/applycoupon", authMiddleware, applyCoupon)
router.post("/cart/cash-order", authMiddleware, createOrder)


router.put('/password', authMiddleware, updatePassword)
router.put('/save-address', authMiddleware, saveUserAddress)
router.put('/orders/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)
// router.post('/wishList', authMiddleware, setWishList)

router.get("/get-users", getAllUsers)
router.get("/refresh", handleRefreshToken)
router.get("/logout", logout)
router.get('/wishList', authMiddleware, getWishList)
router.get("/user-cart", authMiddleware, getUserCart)
router.get("/get-orders", authMiddleware, getOrders)


router.get("/get-a-user/:id", authMiddleware, isAdmin, getaUser)


router.delete("/empty-cart", authMiddleware, emptyCart)
router.delete("/delete-a-user/:id", deleteaUser)

router.put("/update-a-user/:id", authMiddleware, updateaUser)
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser)
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser)





// For Front End

router.get("/login", loginUserGET)
router.get("/register", registerUserGET)

module.exports = router;