const ProductCategory = require("../models/productCategoryModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createProductCategory = asyncHandler(async (req, res) => {

    try {
        const createNewProductCategory = await ProductCategory.create(
            req.body
        )
        res.json(createNewProductCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateProductCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedProductCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteProductCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedProductCategory = await ProductCategory.findByIdAndDelete(id)
        res.json(deletedProductCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getaProductCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaProductCategory = await ProductCategory.findById(id)
        res.json(gotaProductCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllProductCategory = asyncHandler(async (req, res) => {

    try {
        const getBlogCategories = await ProductCategory.find()
        res.json(getBlogCategories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createProductCategory, getAllProductCategory, updateProductCategory, deleteProductCategory, getaProductCategory }