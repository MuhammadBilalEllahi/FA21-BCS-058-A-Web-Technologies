const express = require("express")
const router = express.Router()

const Product = require("./../../models/ProductModel")



router.get("/", async (req, res) => {

    res.render("index", { layout: "layouts/layout" })
    // res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })
})


router.get("/shop", async (req, res) => {
    // <!-- src="data:<%= product.p_img.contentType %>;base64,<%= product.p_img.data.toString('base64') %>" -->
    // <!-- <img class="col-11" src="<%= product.p_img.data%>" alt=""> -->


    const product = await Product.find()

    res.render("shop", { layout: "layouts/noNavLayout", products: product, title: "Woodie Shop" })

    // res.render("index", { layout: "layouts/layout" })
})


module.exports = router