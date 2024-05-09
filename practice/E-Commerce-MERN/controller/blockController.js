const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")

const createBlog = asyncHandler(async (req,res)=>{
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})


const updateBlog = asyncHandler(async (req,res)=>{
    const {id} = req.params

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id,req.body, {
            new: true
        })
        res.json(updatedBlog)
        // res.json({
        //     status: "success",
        //     newBlog
        // })
    } catch (error) {
        throw new Error(error)
    }
})


const getBlog = asyncHandler( async (req,res)=>{
    const { id} = req.params
    try {
        const getaBlog = await Blog.findById(id)
       const updatedBlog=   await Blog.findByIdAndUpdate(id,{
            $inc: {numViews: 1}
         }, {
            new : true
         })
        res.json(updatedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBlogs = asyncHandler( async (req,res)=>{
    const { id} = req.params
    try {
        const getBlogs = await Blog.find()
       
        res.json(getBlogs)
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = {createBlog,updateBlog, getBlog, getAllBlogs}