const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const authMiddleware =  asyncHandler( async (req,res,next)=>{

    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(' ')[1];
        try {
            if(token){
                const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
                const user = await User.findById(decoded?.id)
                req.user = user
                // console.log("val"+req.user , user)
                next()
            }
        
        } catch (error) {
            throw new Error("Not Authorized token expired. Please login again")
        }
    }else{
        throw new Error("There is no Token attached to Handler")
    }
    
})

const isAdmin = asyncHandler((req,res,next)=>{
    console.log(req.user)
})

module.exports = {authMiddleware, isAdmin};