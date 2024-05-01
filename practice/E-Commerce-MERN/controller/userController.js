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
    const foundUser = await User.findOne({email})
    if(foundUser && await foundUser.isPasswordMatched(password)){
        res.json({
            id : foundUser?._id,
            firstname:  foundUser?.firstname,
            lastname:  foundUser?.lastname,
            email:  foundUser?.email,
            mobile:  foundUser?.mobile,
            password:  foundUser?.password,
            token: generateToken(foundUser?._id) 
          })
    }else{
        throw new Error("Invalid Credentials")
    }
})


const getAllUsers = async (req,res)=>{
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
}

const getaUser = async (req,res)=>{
    // const user = await User.find()
    const {id} = req.params
    console.log(id)

    try {
        const user = await User.findById(id);
        res.json(
            {
                user : user
            }
        )
        
    } catch (error) {
        throw new Error(error)
    }
}

const deleteaUser = async (req,res)=>{
    // const user = await User.find()
    const {id} = req.params
    console.log(id)

    try {
        const deleted_user = await User.findByIdAndDelete(id);
        res.json(
            {
                deleted_user : deleted_user
            }
        )
        
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { createUser, loginUserController ,getAllUsers, getaUser, deleteaUser}