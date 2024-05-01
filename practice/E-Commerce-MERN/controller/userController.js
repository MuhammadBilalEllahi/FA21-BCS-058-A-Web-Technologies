const User = require("../models/userModel")

const createUser = async (req,res)=>{
    const email = req.body.email
    const foundUser = await User.findOne({email:email})

    if(!foundUser){
        const newUser =await User.create(req.body);
        res.json( newUser)
        // console.log((await newUser))
    }
    else{
        res.json({
            "message": "User Already Exists", 
            success: false,
        })
    }

}

module.exports = {createUser}