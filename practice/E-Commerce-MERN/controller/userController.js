const { generateToken } = require("../config/jwtToken")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require("../utils/validateMongodbid")
const { generateRefreshToken } = require("../config/refreshToken")
const jwt = require('jsonwebtoken');
const { sendEmail } = require("./emailController")


const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const foundUser = await User.findOne({ email: email })

    if (!foundUser) {
        const newUser = await User.create(req.body);
        res.json(newUser)
        // console.log((await newUser))
    }
    else {
        throw new Error("User Already Exists")
        // res.json({
        //     "message": "User Already Exists", 
        //     success: false,
        // })
    }

})


const loginUserController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
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
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 *60 * 1000
        })


        res.json({
            id: foundUser?._id,
            firstname: foundUser?.firstname,
            lastname: foundUser?.lastname,
            email: foundUser?.email,
            mobile: foundUser?.mobile,
            password: foundUser?.password,
            token: generateToken(foundUser?._id)
        })
    } else {
        throw new Error("Invalid Credentials")
    }
})

const handleRefreshToken = asyncHandler( async (req,res)=>{
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error("No Refresh Token")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken})

    if(!user) throw new Error("No refresh Token present in DB or not matched")
    jwt.verify(refreshToken,process.env.refreshToken,(err,decoded)=>{
        if(err || user.id !== decoded.id){

            throw new Error("There is something wrong with refrsh Token")
        }
        const accessToken = generateRefreshToken(user?._id)
        res.json({accessToken})
    })
    
    
})

const logout = asyncHandler( async (req,res)=>{
    const cookie = req.cookies
    if(!cookie?.refreshToken) throw new Error("No Refresh Token")
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({refreshToken})

    if(!user) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true
        })
        res.clearCookie('refreshToken')
        return res.sendStatus(204)
    }
    await User.findOneAndUpdate({refreshToken}, {
        refreshToken : "",
    })
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    res.clearCookie('refreshToken')
     res.sendStatus(204)
})


const getAllUsers = async (req, res) => {
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
}

const getaUser = async (req, res) => {
    // const user = await User.find()
    const { _id } = req.user
    validateMongoDbId(_id)
    console.log(_id)

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


const updatePassword = asyncHandler( async(req,res)=>{
    const { _id } = req.user
    const {password} = req.body;
    validateMongoDbId(_id)
    const user = await User.findById(_id)
    if(password){
        user.password = password
        console.log(  user.password)
        console.log(  password)
        const updatedPassword = await user.save()
        res.json(updatedPassword)
    }
    else{ 
        res.json(user)
    }
})

const forgotPasswordToken = asyncHandler( async(req,res)=>{
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user) throw new Error("USer not found with this email")
        

    try {
        const token = await user.createPasswordResetToken()
        console.log("here")
        await user.save()
        const resetURL = `Hi , Please Follow this Link to reset Password. This link is valid for 10 min till now <a href="http://localhost:5000/api/user/reset-password${token}">Click Here</a>`

        const data = {
            to: email,
            subject: "Forgot Password Link",
            text: "Hey User, \n",
            html: resetURL
        }

        sendEmail(data)
        res.json(token)
    } catch (error) {
        throw new Error(error)
    }
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
    forgotPasswordToken
}



