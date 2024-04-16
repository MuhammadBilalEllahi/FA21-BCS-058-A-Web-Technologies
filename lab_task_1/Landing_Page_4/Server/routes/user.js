const express = require("express");
const user = express();
let Products = require("../models/Products.js")



user.get("/", function (req, res) {
    // res.send("Un Authorized")
    res.render("index", {title: "Main Page"})
});

user.get("/shop", async function (req, res) {
    res.render("shop", { title: "This is EJS Title"})
})

user.get("/products", async function (req, res) {
    let product = await Products.find();
    res.send(product)
})


user.get("/shops", async function (req, res) {
    let product = await Products.find();
    res.render("shops",{title: "Product Shop", products: product})
})


module.exports = user;