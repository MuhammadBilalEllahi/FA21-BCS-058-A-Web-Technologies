const User = require("../models/userModel")

const createUser = async (req,res)=>{
    const email = req.body.email
    const foundUser = await User.findOne(email)

    if(!foundUser){
        const newUser = User.create(req.body);
        res.json(newUser)
    }
    else{
        res.json({
            "message": "User Already Exists", 
            success: false,
        })
    }

}

module.exports = {createUser}