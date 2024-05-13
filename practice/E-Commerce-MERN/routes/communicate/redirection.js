const express = require("express")
const router = express.Router()



router.get("/", async (req, res) => {

    res.render("index", { layout: "layouts/layout" })
    // res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })
})


router.get("/shop", async (req, res) => {

    res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })

    // res.render("index", { layout: "layouts/layout" })
})


module.exports = router