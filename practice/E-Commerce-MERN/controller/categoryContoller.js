const Category = require("../models/categoryModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createCategory = asyncHandler(async (req, res) => {

    try {
        const createNewCategory = await Category.create(
            req.body
        )
        res.json(createNewCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const updateCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedCategory = await Category.findByIdAndDelete(id)
        res.json(deletedCategory)
    } catch (error) {
        throw new Error(error)
    }
})

const getaCategory = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaCategory = await Category.findById(id)
        res.json(gotaCategory)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllCategory = asyncHandler(async (req, res) => {

    try {
        const getCategories = await Category.find()
        res.json(getCategories)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createCategory, getAllCategory, updateCategory, deleteCategory, getaCategory }