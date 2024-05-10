const Brand = require("../models/brandModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createBrand = asyncHandler(async (req, res) => {

    try {
        const createNewBrand = await Brand.create(
            req.body
        )
        res.json(createNewBrand)
    } catch (error) {
        throw new Error(error)
    }
})

const updateBrand = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedBrand)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteBrand = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id)
        res.json(deletedBrand)
    } catch (error) {
        throw new Error(error)
    }
})

const getaBrand = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaBrand = await Brand.findById(id)
        res.json(gotaBrand)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllBrand = asyncHandler(async (req, res) => {

    try {
        const getBrands = await Brand.find()
        res.json(getBrands)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createBrand, getAllBrand, updateBrand, deleteBrand, getaBrand }