const Blog = require("../models/blogModel")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")
const { cloudinaryUploadImg } = require("../utils/cloudinary")

const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body)
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
})


const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
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


const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const getaBlog = await Blog.findById(id).populate('likes').populate('dislikes')
        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            $inc: { numViews: 1 }
        }, {
            new: true
        })
        res.json(getaBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBlogs = asyncHandler(async (req, res) => {

    try {
        const getBlogs = await Blog.find()

        res.json(getBlogs)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id)
        res.json(deletedBlog)
    } catch (error) {
        throw new Error(error)
    }
})

const likeBlog = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { BlogId } = req.body;
    validateMongoDbId(BlogId)

    // Find the blog which you want to be liked
    const blog = await Blog.findById(BlogId)
    // Find the logged in user
    const userID = req?.user?._id
    // Find if user has already liked the post
    const isLiked = blog?.isLiked;
    // Find the user if he disliked the post
    const alreadyDisliked = blog?.dislikes?.find(
        (userId) => userId?.toString() === userID?.toString()
    )

    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $pull: { dislikes: userID },
            isDisliked: false
        }, {
            new: true
        })
        res.json(blog)
    }

    if (isLiked) {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $pull: { likes: userID },
            isLiked: false
        }, {
            new: true
        })
        res.json(blog)
    }
    else {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $push: { likes: userID },
            isLiked: true
        }, {
            new: true
        })
        res.json(blog)
    }


})

const disLikeBlog = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { BlogId } = req.body;
    validateMongoDbId(BlogId)

    // Find the blog which you want to be liked
    const blog = await Blog.findById(BlogId)
    // Find the logged in user
    const userID = req?.user?._id
    // Find if user has already liked the post
    const isDisLiked = blog?.isDisliked;
    // Find the user if he disliked the post
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === userID?.toString()
    )

    if (alreadyLiked) {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $pull: { likes: userID },
            isLiked: false
        }, {
            new: true
        })
        res.json(blog)
    }

    if (isDisLiked) {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $pull: { dislikes: userID },
            isDisliked: false
        }, {
            new: true
        })
        res.json(blog)
    }
    else {
        const blog = await Blog.findByIdAndUpdate(BlogId, {
            $push: { dislikes: userID },
            isDisliked: true
        }, {
            new: true
        })
        res.json(blog)
    }

})


const uploadBlogImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id)

    try {

        const uploader = (path) => cloudinaryUploadImg(path, "images")
        const urls = []
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path)
            urls.push(newpath)
        }

        const findBlog = await Blog.findByIdAndUpdate(id,
            {
                images: urls.map((file) => {
                    return file
                }),

            },
            {
                new: true
            }
        )
        res.json(findBlog)
    } catch (error) {
        throw new Error(error)
    }

})

module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, disLikeBlog, uploadBlogImages }