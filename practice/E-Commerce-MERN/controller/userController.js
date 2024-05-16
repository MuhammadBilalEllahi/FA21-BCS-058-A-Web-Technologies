const { generateToken } = require("../config/jwtToken")
const User = require("../models/userModel")

const Product = require("../models/ProductModel")
const Cart = require("../models/cartModel")
const Coupon = require("../models/couponModel")
const Order = require("../models/orderModel")
const uniqid = require("uniqid")

const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")
const { generateRefreshToken } = require("../config/refreshToken")
const jwt = require('jsonwebtoken');
const { sendEmail } = require("./emailController")
const crypto = require('crypto')


const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;

    console.log(req.body)
    const foundUser = await User.findOne({ email: email })

    if (!foundUser) {
        const newUser = await User.create(req.body);
        // res.json(newUser)
        res.redirect("/login")
        // console.log((await newUser))
    }
    else {
        req.flash("danger", "User Already Exists");
        res.redirect("/api/user/register")

        // throw new Error("User Already Exists")
        // res.json({
        //     "message": "User Already Exists", 
        //     success: false,
        // })
    }

})


const loginUserController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // console.log(req.body)
    // console.log(email,password)
    const foundUser = await User.findOne({ email })
    if (foundUser && await foundUser.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(foundUser?.id)
        const updateUser = await User.findByIdAndUpdate(
            foundUser.id, {
            refreshToken: refreshToken
        },
            {
                new: true
            }

        )
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })




        // res.json({
        //     id: foundUser?._id,
        //     firstname: foundUser?.firstname,
        //     lastname: foundUser?.lastname,
        //     email: foundUser?.email,
        //     mobile: foundUser?.mobile,
        //     password: foundUser?.password,
        //     token: generateToken(foundUser?._id)
        // })
    } else {

        res.redirect("/api/user/login")

        throw new Error("Invalid Credentials")
    }
    req.session.user = foundUser
    // console.log("Session: ", req.session.user)
    res.redirect("/")
})




const loginAdminController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password)
    const foundAdmin = await User.findOne({ email })
    if (foundAdmin.role !== 'admin') throw new Error("Not Authorized")
    if (foundAdmin && await foundAdmin.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(foundAdmin?.id)
        const updateUser = await User.findByIdAndUpdate(
            foundAdmin.id, {
            refreshToken: refreshToken
        },
            {
                new: true
            }

        )
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })



        // Comment this res.json for it is not needed 
        // res.json({
        //     id: foundAdmin?._id,
        //     firstname: foundAdmin?.firstname,
        //     lastname: foundAdmin?.lastname,
        //     email: foundAdmin?.email,
        //     mobile: foundAdmin?.mobile,
        //     password: foundAdmin?.password,
        //     token: generateToken(foundAdmin?._id)
        // })
    } else {
        res.redirect("/api/user/login")
        // throw new Error("Invalid Credentials")
    }

    res.redirect("/")



})


const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })

    if (!user) throw new Error("No refresh Token present in DB or not matched")
    jwt.verify(refreshToken, process.env.refreshToken, (err, decoded) => {
        if (err || user.id !== decoded.id) {

            throw new Error("There is something wrong with refrsh Token")
        }
        const accessToken = generateRefreshToken(user?._id)
        res.json({ accessToken })
    })


})

const logout = asyncHandler(async (req, res) => {
    if (req?.session?.user) {
        req.session.user = null
    }
    const cookie = req.cookies
    if (!cookie?.refreshToken) throw new Error("No Refresh Token")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })

    if (!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true
        })
        res.clearCookie('refreshToken')
        return res.sendStatus(204)
    }
    await User.findOneAndUpdate({ refreshToken }, {
        refreshToken: "",
    })
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    req.session.user = null
    res.clearCookie('refreshToken')
    // res.sendStatus(204)
    res.redirect("/shop")
})


const getAllUsers = async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
}



const saveUserAddress = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const updated_user = await User.findByIdAndUpdate(_id, {

            address: req?.body?.address,


        },
            {
                new: true
            });
        res.json(updated_user)


    } catch (error) {
        throw new Error(error)
    }
})


const getaUser = async (req, res) => {
    // const user = await User.find()
    const { _id } = req.user
    validateMongoDbId(_id)
    // console.log(_id)

    try {
        const user = await User.findById(_id);
        res.json(
            {
                user: user
            }
        )

    } catch (error) {
        throw new Error(error)
    }
}

const deleteaUser = async (req, res) => {
    // const user = await User.find()
    const { _id } = req.user
    validateMongoDbId(_id)

    try {
        const deleted_user = await User.findByIdAndDelete(_id);
        res.json(
            {
                deleted_user: deleted_user
            }
        )

    } catch (error) {
        throw new Error(error)
    }
}



const updateaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const updated_user = await User.findByIdAndUpdate(_id, {

            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
            password: req?.body?.password,

        },
            {
                new: true
            });
        res.json(updated_user)


    } catch (error) {
        throw new Error(error)
    }
}
)

const blockUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const blockeded_user = await User.findByIdAndUpdate(_id, {
            isBlocked: true

        },
            {
                new: true
            });
        res.json({
            message: "User Blocked"
        })


    } catch (error) {
        throw new Error(error)
    }
})
const unBlockUser = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const un_blockeded_user = await User.findByIdAndUpdate(_id, {
            isBlocked: false

        },
            {
                new: true
            });
        res.json({
            message: "User unBlocked"
        })


    } catch (error) {
        throw new Error(error)
    }
})
// const blockaUser = async (req, res) => {
//     const { _id , isBlocked} = req.user
//     try {
//         const blockeded_user = await User.findByIdAndUpdate(_id, {
//             isBlocked: !isBlocked
//Iam not writing !Blocked because maybe if there isn't a block value or 
// is not passed fue to an error or db didn't work, which it does work. anywasy just doing it
//         },
//             {
//                 new: true
//             });
//         res.json(blockeded_user)


//     } catch (error) {
//         throw new Error(error)
//     }
// }


const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user
    const { password } = req.body;
    validateMongoDbId(_id)
    const user = await User.findById(_id)
    if (password) {
        user.password = password
        // console.log(user.password)
        // console.log(password)
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    }
    else {
        res.json(user)
    }
})

const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    // console.log(user)
    if (!user) throw new Error("User not found with this email")


    try {
        const token = await user.createPasswordResetToken()

        await user.save()
        const resetURL = `Hi , Please Follow this Link to reset Password. This link is valid for 10 min till now <a href="http://localhost:5000/api/user/reset-password/${token}">Click Here</a>`

        const data = {
            to: email,
            subject: "Forgot Password Link",
            text: "Hey User, \n",
            html: resetURL
        }
        // console.log(data)

        sendEmail(data)
        res.json(token)
    } catch (error) {
        throw new Error(error)
    }
})


const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    // console.log(hashedToken)
    const user = await User.findOne({

        passwordResetToken: hashedToken,
        passwordResetTokenExpires: { $gt: Date.now() }
    })


    // console.log(user)
    if (!user) throw new Error('Token Expired, Please Try again Later')
    user.password = password;
    user.passwordResetToken = undefined
    user.passwordResetTokenExpires = undefined
    await user.save()
    res.json(user)
})


const getWishList = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        throw new Error(error)
    }
})


const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;

    const { _id } = req.user;
    validateMongoDbId(_id)
    try {
        let products = []
        const user = await User.findById(_id)
        // check if user  already has product in cart
        const alreadyExistCart = await Cart.findOne({ orderby: user._id })
        if (alreadyExistCart) {
            alreadyExistCart.remove()
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {}
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;

            let getPrice = await Product.findById(
                cart[i]._id
            ).select('price').exec()
            object.price = getPrice.price
            products.push(object)

        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count
        }
        cartTotal = Math.round(cartTotal)
        console.log(products, cartTotal)
        let newCart = await new Cart({
            products,
            cartTotal,
            orderBy: user?._id
        }).save()
        res.json(newCart)
    } catch (error) {
        throw new Error(error)
    }
})

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const cart = await Cart.findOne({ orderBy: _id }).populate(
            "products.product"
            // , "_id title price totalAfterDiscount"
        )
        res.json(cart)
    } catch (error) {
        throw new Error(error)
    }

})

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user
    validateMongoDbId(_id)
    try {
        const user = await User.findOne({ _id })
        const cart = await Cart.findOneAndDelete({ orderBy: user._id })
        res.json(cart)
    } catch (error) {
        throw new Error(error)
    }
})


const applyCoupon = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id)
    const { coupon } = req.body;
    console.log(coupon)
    const validCoupon = await Coupon.findOne({ name: coupon })

    if (validCoupon === null) { throw new Error("Invalid Coupon") }
    console.log(validCoupon)
    const user = await User.findOne({ _id })
    let { products, cartTotal } = await Cart.findOne(
        { orderBy: user._id }).populate(
            "products.product"
        )
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2)
    await Cart.findOneAndUpdate(
        {
            orderBy: user._id
        },
        {
            totalAfterDiscount: totalAfterDiscount
        },
        {
            new: true
        })

    res.json(totalAfterDiscount)
})


const createOrder = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id)
    const { COD, couponApplied } = req.body
    try {
        if (!COD) throw new Error("Create Cash Order Failed")
        const user = await User.findById(_id)
        let userCart = await Cart.findOne({ orderBy: user._id })
        let finalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            finalAmount = userCart.totalAfterDiscount
        } else {
            finalAmount = userCart.cartTotal
        }

        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: "Cash on Delievery",
                created: Date.now(),
                currency: "usd"
            },
            orderBy: user._id,
            orderStatus: "Cash on Delievery"
        }).save()

        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } }
                }
            }
        })

        const updated = await Product.bulkWrite(update, {})

        res.json({ "message": "success" })

    } catch (error) {
        throw new Error(error)
    }

})


const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id)

    try {
        const userOrders = await Order.findOne({ orderBy: _id }).populate('products.product').exec()
        res.json(userOrders)
    } catch (error) {
        throw new Error(error)
    }
})


const updateOrderStatus = asyncHandler(async (req, res) => {

    const { status } = req.body;
    const { id } = req.params
    validateMongoDbId(id)


    try {
        const updateOrderStatus = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status
                }
            },
            {
                new: true
            }
        )
        res.json(updateOrderStatus)

    } catch (error) {
        throw new Error(error)
    }
})




// For Front End

const loginUserGET = asyncHandler(async (req, res) => {
    // const wishlistLength = 8;
    res.render("auth/login", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength });



    // res.render("index", { layout: "layouts/layout" })
    // res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })

})

const registerUserGET = asyncHandler(async (req, res) => {

    // const wishlistLength = 8
    res.render("auth/register", { layout: "layouts/layout", req: req, wishlistLength: res.locals.wishlistLength })


    // res.render("index", { layout: "layouts/layout" })
    // res.render("shop", { layout: "layouts/noNavLayout", products: undefined, title: "Woodie Shop" })

})



module.exports = {
    createUser,
    loginUserController,
    getAllUsers,
    getaUser,
    deleteaUser,
    updateaUser,
    blockUser,
    unBlockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdminController,
    getWishList,
    saveUserAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,



    loginUserGET,
    registerUserGET
}



