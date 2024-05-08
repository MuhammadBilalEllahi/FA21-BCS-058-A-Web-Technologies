const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createBlog = asyncHandler(async (req,res)=>{
    try {
        const newBlog = await Blog.create(req.body)
        res.json({
            status: "success",
            newBlog
        })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {createBlog}