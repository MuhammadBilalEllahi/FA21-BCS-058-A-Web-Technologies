const Enquiry = require("../models/enqModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createEnquiry = asyncHandler(async (req, res) => {

    try {
        const createNewEnquiry = await Enquiry.create(
            req.body
        )
        res.json(createNewEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const updateEnquiry = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true
            }
        )
        res.json(updatedEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})


const deleteEnquiry = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const deletedEnquiry = await Enquiry.findByIdAndDelete(id)
        res.json(deletedEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

const getaEnquiry = asyncHandler(async (req, res) => {

    const { id } = req.params;

    validateMongoDbId(id)
    try {
        const gotaEnquiry = await Enquiry.findById(id)
        res.json(gotaEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})


const getAllEnquiry = asyncHandler(async (req, res) => {

    try {
        const getEnquirys = await Enquiry.find()
        res.json(getEnquirys)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createEnquiry, getAllEnquiry, updateEnquiry, deleteEnquiry, getaEnquiry }