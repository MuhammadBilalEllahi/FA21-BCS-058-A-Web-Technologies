const Color = require("../models/colorModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createColor = asyncHandler(async (req, res) => {

    try {
        const createNewColor = await Color.create(
            req.body
        )
        res.json(createNewColor)
    } catch (error) {
        throw new Error(error)
    }
})

const updateColor = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedColor = await Color.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedColor)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteColor = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedColor = await Color.findByIdAndDelete(id)
        res.json(deletedColor)
    } catch (error) {
        throw new Error(error)
    }
})

const getaColor = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaColor = await Color.findById(id)
        res.json(gotaColor)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllColor = asyncHandler(async (req, res) => {

    try {
        const getColors = await Color.find()
        res.json(getColors)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createColor, getAllColor, updateColor, deleteColor, getaColor }