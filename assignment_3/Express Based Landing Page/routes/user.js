const express = require("express");
const user = express.Router();
let Products = require("../models/Products.js")



user.get("/", function (req, res) {
    // res.send("Un Authorized")
    res.render("index", { layout: "../views/layouts/layout.ejs", title: "Main Page" })
});

user.get("/shop", async function (req, res) {
    res.render("shop", { layout: "../views/layouts/noNavLayout.ejs", title: "Shop it" })
})

user.get("/products", async function (req, res) {
    let product = await Products.find();
    res.send(product)
})


user.get("/shops", async function (req, res) {
    let product = await Products.find();
    res.render("shops", { layout: "../views/layouts/noNavLayout.ejs", title: "Product Shop", products: product })
})


module.exports = user;