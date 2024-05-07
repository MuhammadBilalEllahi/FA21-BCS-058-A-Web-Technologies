const asyncHandler = require("express-async-handler")
const Product = require("../models/ProductModel")
const slugify = require("slugify")

const createProduct = asyncHandler(async (req,res)=>{
    
    try {
        if(req.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const createNewProduct = await Product.create(req.body)
        res.json(createNewProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const updateProduct = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    try {
        if(re.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const updateaProduct = await Product.findOneAndUpdate({id},req.body,{
            new: true
        })
        res.json(updateaProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    try {
        if(re.body.title){
            req.body.slug = slugify(req.body.title)
        }
        const deleteaProduct = await Product.findOneAndDelete(id)
        res.json(deleteaProduct)
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
    // console.log(req.query)// to search different items in db by addign ? in url and field name and value. it tells all those vales requestes
    
    try {
        // Filtering
        const queryObj = {...req.query}
        const excludedField = ["page","sort","limit","fields"]
        excludedField.forEach((el)=> delete queryObj[el]);
        console.log(queryObj)

        let queryStr= JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,(match) =>  `$${match}`)
        console.log(JSON.parse(queryStr));

        let query = Product.find(JSON.parse(queryStr))
        // TypeError: Assignment to constant variable. if const is used instead of let

        
        // const getAllProducts = await Product.find()
        // Sorting
        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ')
            console.log(sortBy);
            query = query.sort(sortBy)
        }else{
            query = query.sort('-createdAt ')
        }
        const product = await query;
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})





module.exports = {createProduct, getaProduct, getAllProduct,updateProduct, deleteProduct}