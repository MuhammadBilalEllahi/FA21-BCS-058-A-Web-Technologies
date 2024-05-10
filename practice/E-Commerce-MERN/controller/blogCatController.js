const BlogCategory = require("../models/blogCatModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createBlogCategory = asyncHandler(async (req, res) => {

    try {
        const createNewBlogCategory = await Category.create(
            req.body
        )
        res.json(createNewBlogCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateBlogCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedBlogCategory = await Category.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedBlogCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteBlogCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedBlogCategory = await Category.findByIdAndDelete(id)
        res.json(deletedBlogCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getaBlogCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaBlogCategory = await Category.findById(id)
        res.json(gotaBlogCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllBlogCategory = asyncHandler(async (req, res) => {

    try {
        const getBlogCategories = await Category.find()
        res.json(getBlogCategories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createBlogCategory, getAllBlogCategory, updateBlogCategory, deleteBlogCategory, getaBlogCategory }