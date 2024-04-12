


const express = require("express");
const crud = express();
let Products = require("../models/Products.js")





// RESTFUL METHODS

// GET
crud.get("/products/:id", async function (req, res) {
    let product = await Products.findById(req.params.id);
    res.send(product)
})

// DELETE
crud.delete("/products/:id", async function (req, res) {
    let product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send("Record Not Found")
    res.send({ "message": "Deleted Successfuly" })
});

// PUT
crud.put("/products/:id", async function (req, res) {
    const productId = req.params.id;
    const { p_name, p_orig_price, p_sale_price, p_img, p_img_on_error } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }

        let product = await Products.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        if (p_name) product.p_name = p_name;
        if (p_orig_price) product.p_orig_price = p_orig_price;
        if (p_sale_price) product.p_sale_price = p_sale_price;
        if (p_img) product.p_img = p_img;
        if (p_img_on_error) product.p_img_on_error = p_img_on_error;

        // if (!p_name || !p_orig_price || !p_sale_price || !p_img || !p_img_on_error) {
        //     return res.status(400).json({ error: "Incomplete product data" });
        // }

        await product.save();

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
});

// POST
crud.post("/products", async function (req, res) {
    const { p_name, p_orig_price, p_sale_price, p_img, p_img_on_error } = req.body;

    try {
        if (!p_name || !p_orig_price || !p_sale_price || !p_img || !p_img_on_error) {
            return res.status(400).json({ error: "Incomplete product data" });
        }

        if (typeof p_orig_price !== "number" || typeof p_sale_price !== "number") {
            return res.status(400).json({ error: "Invalid price format" });
        }

        if (!p_img || typeof p_img !== "object" || !p_img.data || !p_img.contentType) {
            return res.status(400).json({ error: "Invalid main image data" });
        }

        if (!p_img_on_error || typeof p_img_on_error !== "object" || !p_img_on_error.data || !p_img_on_error.contentType) {
            return res.status(400).json({ error: "Invalid error image data" });
        }

        const product = new Products({
            p_name,
            p_orig_price,
            p_sale_price,
            p_img,
            p_img_on_error
        });

        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Failed to save product" });
    }
});


// Refresh
crud.get("/products/refresh", async function (req, res) {
    try {
        const data = await fs.readFile("./dumb.json", "utf-8");
        const productDataFromFile = JSON.parse(data);

        await Products.insertMany(productDataFromFile);
        res.send({ "message": "Data refreshed" });
    } catch (error) {
        console.error("Error refreshing data:", error);
        res.status(500).send("Internal Server Error");
    }
});



module.exports = crud;