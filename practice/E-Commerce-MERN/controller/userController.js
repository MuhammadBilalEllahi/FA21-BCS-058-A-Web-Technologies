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

module.exports = { createUser, loginUserController }