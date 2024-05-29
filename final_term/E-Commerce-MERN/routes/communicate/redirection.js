const express = require("express")
const router = express.Router()

const Product = require("./../../models/ProductModel")
const checkSessionAuth = require("../../middlewares/checkSession")
const User = require("../../models/userModel")







router.get("/", async (req, res) => {
    // console.log("Here is requser", req.user)
    const featured = await Product.find({ isFeatured: true }).limit(5);
    res.render("index", { layout: "layouts/layout", featured: featured, req: req, wishlistLength: res.locals.wishlistLength })
})



router.get("/home", async (req, res) => {
    // console.log("Here is requser", req.user)
    const featured = await Product.find({ isFeatured: true }).limit(5);

    res.render("index2", { layout: "layouts/layout", featured: featured, req: req, wishlistLength: res.locals.wishlistLength })
})


router.get("/products/:id", async (req, res) => {
    console.log("Hi")
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        if (!req.session.visitedProducts) {
            req.session.visitedProducts = [];
        }
        if (!req.session.visitedProducts.includes(product._id.toString())) {
            req.session.visitedProducts.push(product._id.toString());
        }
        console.log("REQSESSION PRODUCT: ", req.session.visitedProducts)




        res.render("products", { layout: "layouts/layout", product: product, req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })
    } catch (err) {
        res.status(500).send(err);
    }
})

router.get('/visited-products', async (req, res) => {
    try {
        if (!req.session.visitedProducts || req.session.visitedProducts.length === 0) {
            return res.render('visitedPage', { layout: "layouts/layout", products: [], req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength });
        }
        const products = await Product.find({ _id: { $in: req.session.visitedProducts } });


        res.render('visitedPage', { layout: "layouts/layout", products: products, req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength });
    } catch (err) {
        res.status(500).send(err);
    }
});













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


router.get("/product/:id", async (req, res) => {
    console.log("Hi")

    // console.log(req.params)
    // console.log(req.body)
    // console.log(req.query)
    try {

        // const product = await Product.findById(req.params.id);
        // console.log(req.params.id)
        // if (!product) {
        //     return res.status(404).send('Product not found');
        // }

        // if (!req.session.visitedProducts) {
        //     req.session.visitedProducts = [];
        // }
        // if (!req.session.visitedProducts.includes(product._id.toString())) {
        //     req.session.visitedProducts.push(product._id.toString());
        // }
        // console.log("REQSESSION PRODUCT: ", req.session.visitedProducts)



        res.render("product", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

    } catch (error) {
        throw Error(error)
    }

})



router.get("/checkout", async (req, res) => {
    res.render("pages/checkout", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength, cartLength: res.locals.cartLength })

})






router.get('/search', async (req, res) => {
    const { query, category } = req.query;
    console.group("Query", query)
    try {
        const products = await Product.find({
            $or: [
                { title: { $regex: `${query}`, $options: 'i' } },
                { category: { $regex: `${query}`, $options: 'i' } },
                { description: { $regex: `${query}`, $options: 'i' } },
                { category: { $regex: `${category}`, $options: 'i' } }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




router.get('/searchtest', async (req, res) => {
    const { query, page } = req.query;

    console.log("Page: ", page)
    const pageNum = page || 1
    console.log("Page Numberacs: ", pageNum)

    console.log("Res Query", req.query)
    console.log("Query", query)
    console.log("Res Query Q", req.query.q)

    if (!req.session.history) {
        req.session.history = []
    }

    if (query && !req.session.history.includes(query)) {
        req.session.history.push(query);
    }
    // req.session.history.push(query)
    console.log("REQ SEESSION, ", req.session.history)
    try {

        const query2 = {
            $or: [
                { title: { $regex: `${query}`, $options: 'i' } },
                { category: { $regex: `${query}`, $options: 'i' } },
                { description: { $regex: `${query}`, $options: 'i' } },
            ]
        }


        const PageLimit = 3;

        const products = await Product.find(query2).skip((Number(pageNum) - 1) * PageLimit).limit(PageLimit);

        const count = await Product.countDocuments(query2)

        const totalPages = Math.ceil(count / PageLimit)

        console.log(totalPages, count, PageLimit, products.title)


        // const history = req.session.history
        // console.log(history.toString().split(","))



        res.render("extras/test", { layout: "layouts/sample", products: products, totalPages: totalPages, currentPage: Number(pageNum), query: query, history: req.session.history })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.get("/test", async (req, res) => {
    res.render("extras/test", { layout: "layouts/sample" })
})





module.exports = router