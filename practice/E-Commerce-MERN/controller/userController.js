const { generateToken } = require("../config/jwtToken")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")


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
    console.log(_id)

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

const updateaUser = asyncHandler(
    async (req, res) => {
        const { _id } = req.user
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

const blockUser = asyncHandler( async (req,res)=>{
    const { _id } = req.user
    try {
        const blockeded_user = await User.findByIdAndUpdate(_id, {
            isBlocked: true

        },
            {
                new: true
            });
        res.json({
            message : "User Blocked"
        })


    } catch (error) {
        throw new Error(error)
    }
})
const unBlockUser = asyncHandler( async (req,res)=>{
    const { _id } = req.user
    try {
        const un_blockeded_user = await User.findByIdAndUpdate(_id, {
            isBlocked: false

        },
            {
                new: true
            });
        res.json({
            message : "User unBlocked"
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

module.exports = { createUser, loginUserController, getAllUsers, getaUser, deleteaUser, updateaUser , blockUser,unBlockUser }