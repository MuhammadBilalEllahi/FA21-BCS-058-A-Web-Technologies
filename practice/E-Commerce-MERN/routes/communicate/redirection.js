const express = require("express")
const router = express.Router()

const Product = require("./../../models/ProductModel")
const checkSessionAuth = require("../../middlewares/checkSession")
const User = require("../../models/userModel")


router.get("/", async (req, res) => {
    // console.log("Here is requser", req.user)
    res.render("index", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength })
})


router.get("/shop", checkSessionAuth, async (req, res) => {
    // <!-- src="data:<%= product.p_img.contentType %>;base64,<%= product.p_img.data.toString('base64') %>" -->
    // <!-- <img class="col-11" src="<%= product.p_img.data%>" alt=""> -->
    const product = await Product.find()
    res.render("shop", { layout: "layouts/noNavLayout", products: product, title: "Woodie Shop", req: req, wishlistLength: res.locals.wishlistLength })
})



router.get("/login", async (req, res) => {

    res.render("auth/login", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength });
})

router.get("/register", async (req, res) => {
    res.render("auth/register", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})


router.get("/wishlist", async (req, res) => {
    res.render("pages/wishlist", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})


router.get("/cart", async (req, res) => {
    res.render("pages/cartPage", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})



router.get("/contact", async (req, res) => {
    res.render("pages/contactPage", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})

router.get("/forgot-password", async (req, res) => {
    res.render("auth/forgotPass", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})


router.get("/api/user/reset-password/:token", async (req, res) => {
    res.render("auth/resetPass", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})

router.get("/blogs", async (req, res) => {
    res.render("pages/blogPage", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})

router.get("/blog/:id", async (req, res) => {
    res.render("pages/blogIndv", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})


router.get("/products", async (req, res) => {
    res.render("pages/products", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})










router.get('/search', async (req, res) => {
    const { query } = req.query;
    console.group("Query", query)
    try {
        const products = await Product.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





module.exports = router