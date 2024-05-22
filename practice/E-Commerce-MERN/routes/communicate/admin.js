const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    res.render("src/index", { layout: "layouts/adminLayout" })
}))


router.get("/register", asyncHandler(async (req, res) => {
    res.render("src/auth/registerAdmin", { layout: "layouts/adminLayout" })
}))

router.get("/login", asyncHandler(async (req, res) => {
    res.render("src/auth/loginAdmin", { layout: "layouts/adminLayout" })
}))

router.get("/forgot-password", asyncHandler(async (req, res) => {
    res.render("src/auth/forgotPassAdmin", { layout: "layouts/adminLayout" })
}))






module.exports = router 