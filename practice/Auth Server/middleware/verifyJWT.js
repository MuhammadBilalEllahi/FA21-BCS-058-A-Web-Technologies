const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyJWT = (req,res,next)=>{
    const authHeader = req.headers.authorization ||  req.headers.Authorization
    // const authHeader = req.headers["authorization"]
    if(!authHeader?.startswith("Bearer ")) return res.sendStatus(401)
    console.log(authHeader)
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token, 
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err) return res.sendStatus(403); //invlaid token
            req.user = decoded.username;
            next();
        }
    )
}

module.exports = verifyJWT