const express = require("express")
const router = express.Router()

const Product = require("./../../models/ProductModel")
const checkSessionAuth = require("../../middlewares/checkSession")
const User = require("../../models/userModel")


router.get("/", async (req, res) => {

    // const { _id } = req.session.user;


    res.render("index", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength })
    // res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })
})


router.get("/shop", checkSessionAuth, async (req, res) => {
    // <!-- src="data:<%= product.p_img.contentType %>;base64,<%= product.p_img.data.toString('base64') %>" -->
    // <!-- <img class="col-11" src="<%= product.p_img.data%>" alt=""> -->
    const product = await Product.find()
    // console.log(wishlistLength)

    res.render("shop", { layout: "layouts/noNavLayout", products: product, title: "Woodie Shop", req: req, wishlistLength: res.locals.wishlistLength })

    // res.render("index", { layout: "layouts/layout" })
})










module.exports = router