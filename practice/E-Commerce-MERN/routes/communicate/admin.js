const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();


router.get("/", asyncHandler(async (req, res) => {
    res.render("src/index", { layout: "layouts/adminLayout", title: "Dashboard" })
}))


router.get("/register", asyncHandler(async (req, res) => {
    res.render("src/auth/registerAdmin", { layout: "extras/adminLayout", title: "Register" })
}))

router.get("/login", asyncHandler(async (req, res) => {
    res.render("src/auth/loginAdmin", { layout: "extras/adminLayout", title: "Login" })
}))

router.get("/forgot-password", asyncHandler(async (req, res) => {
    res.render("src/auth/forgotPassAdmin", { layout: "extras/adminLayout", title: "Forgot Password" })
}))


router.get('/add-product', (req, res) => {

    res.render('src/pages/addProduct');
});


// router.get("/", asyncHandler(async (req, res) => {
//     res.render("src/auth/forgotPassAdmin", { layout: "layouts/adminLayout" })
// }))






// router.get("/", asyncHandler(async (req, res) => {
//     res.render("src/index", { layout: "layouts/adminLayout" })
// }))

module.exports = router 