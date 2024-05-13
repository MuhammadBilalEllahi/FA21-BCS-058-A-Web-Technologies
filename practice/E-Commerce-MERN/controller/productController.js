const asyncHandler = require("express-async-handler")
const Product = require("../models/ProductModel")
const slugify = require("slugify")
const User = require("../models/userModel")
const fs = require('fs')
const validateMongoDbId = require("../utils/validateMongodbid")
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary")

const createProduct = asyncHandler(async (req, res) => {

    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const createNewProduct = await Product.create(req.body)
        res.json(createNewProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (re.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateaProduct = await Product.findOneAndUpdate({ id }, req.body, {
            new: true
        })
        res.json(updateaProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        if (re.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const deleteaProduct = await Product.findOneAndDelete(id)
        res.json(deleteaProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const getOneProduct = await Product.findById(id)
        res.json(getOneProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProduct = asyncHandler(async (req, res) => {
    // console.log(req.query)// to search different items in db by addign ? in url and field name and value. it tells all those vales requestes

    try {
        // Filtering
        const queryObj = { ...req.query }
        const excludedField = ["page", "sort", "limit", "fields"]
        excludedField.forEach((el) => delete queryObj[el]);
        // console.log(queryObj)

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        // console.log(JSON.parse(queryStr));

        let query = Product.find(JSON.parse(queryStr))
        // TypeError: Assignment to constant variable. if const is used instead of let


        // const getAllProducts = await Product.find()
        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            // console.log(sortBy);
            query = query.sort(sortBy)
        } else {
            query = query.sort('-createdAt')
        }
        //  in url "?sort=  -price" sort inverse, "?sort=   price" without - sort in less to greater val


        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            query = query.select(fields)

        } else {
            query = query.select('-__v')
        }

        // Pagination
        const page = req.query.page
        const limit = req.query.limit
        const skip = (page - 1) * limit
        // console.log(page, limit, skip) // not show e.g first 10 products if page is 2 and limit is 10. show 11th and onwards product from page 2 
        query = query.skip(skip).limit(limit)

        if (req.query.page) {
            const productCount = await Product.countDocuments()
            if (skip >= productCount) throw new Error("This Page Doesnot Exists")
        }
        else {

        }

        const product = await query;
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})













const addToWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;

    const { prodId } = req.body;
    try {
        const user = await User.findById(_id)

        const alreadyAdded = user.wishlist.find(
            (id) => id.toString() === prodId
        )

        if (alreadyAdded) {

            let user = await User.findOneAndUpdate(_id,
                {
                    $pull: { wishlist: prodId }
                }, {
                new: true
            }
            )
            res.json(user)
        }
        else {

            let user = await User.findOneAndUpdate(_id,
                {
                    $push: { wishlist: prodId }
                }, {
                new: true
            }
            )
            res.json(user)
        }
    } catch (error) {
        throw new Error(error)
    }



})

const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { stars, prodId, comment } = req.body;

    try {
        const product = await Product.findById(prodId);
        // console.log(product)


        let alreadyRated = product?.ratings?.find(
            (userId) => userId.postedBy.toString() === _id.toString()
        )

        // console.log(alreadyRated)
        if (alreadyRated) {
            const updateRating = await Product.updateOne(
                {
                    ratings: { $elemMatch: alreadyRated }
                },
                {
                    $set: { "ratings.$.star": stars, "ratings.$.comment": comment }

                },
                {

                    new: true
                }
            )
            // res.json(updateRating)
        }
        else {
            const rateProduct = await Product.findByIdAndUpdate(prodId, {
                $push: {
                    ratings: {
                        star: stars,
                        comment: comment,
                        postedBy: _id
                    }
                }
            }, {
                new: true
            })


            // res.json(rateProduct)
        }


        const getAllRatings = await Product.findById(prodId)
        let allRatings = getAllRatings.ratings.length
        let ratingSum = getAllRatings.ratings.map((item) => item.star).reduce((prev, curr) => prev + curr, 0)
        // console.log(ratingSum, allRatings)
        let actualRating = Math.round(ratingSum / allRatings) //should i round it or make it float?
        // console.log(actualRating)


        let finalProduct = await Product.findByIdAndUpdate(prodId, {
            totalratings: actualRating
        },
            {
                new: true
            })


        res.json(finalProduct)
        // console.log(finalProduct)


    } catch (error) {
        throw new Error(error)
    }



})






const uploadImages = asyncHandler(async (req, res) => {
    // const { id } = req.params;
    // validateMongoDbId(id)

    try {
        const uploader = (path) => cloudinaryUploadImg(path, "imagesCloudinary")
        const urls = []
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path)
            urls.push(newpath)
            fs.unlinkSync(path)
        }

        const images = urls.map((file) => {
            return file
        })
        // const findProduct = await Product.findByIdAndUpdate(id,
        //     {
        //         images: urls.map((file) => {
        //             return file
        //         }),

        //     },
        //     {
        //         new: true
        //     }
        // )
        res.json(images)
    } catch (error) {
        throw new Error(error)
    }

})





const deleteImages = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = cloudinaryDeleteImg(id, "imagesCloudinary")
        res.json({ "message": "deleted" })
    } catch (error) {
        throw new Error(error)
    }

})





module.exports = { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct, addToWishList, rating, uploadImages, deleteImages }