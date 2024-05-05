const asyncHandler = require("express-async-handler")
const Product = require("../models/ProductModel")
const slugify = require("slugify")

const createProduct = asyncHandler(async (req,res)=>{
    
    try {
        if(re.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const createNewProduct = await Product.create(req.body)
        res.json(createNewProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getaProduct = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    
    try {
        const getOneProduct = await Product.findById(id)
        res.json(getOneProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProduct = asyncHandler(async (req,res)=>{
    
    
    try {
        const getAllProducts = await Product.find()
        res.json(getAllProducts)
    } catch (error) {
        throw new Error(error)
    }
})





module.exports = {createProduct, getaProduct, getAllProduct}