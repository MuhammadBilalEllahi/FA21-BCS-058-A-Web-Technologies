const asyncHandler = require("express-async-handler")
const product = require("../models/ProductModel")
const Product = require("../models/ProductModel")

const createProduct = asyncHandler(async (req,res)=>{
    
    try {
        const createProduct = await Product.create(req.body)
        res.json(createProduct)
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {createProduct}