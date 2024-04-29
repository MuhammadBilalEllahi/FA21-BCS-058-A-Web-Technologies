const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) { this.users = data }
}


const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefresh = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) return res.status(401)
    console.log(cookies?.jwt)
    const refreshToken = cookies.jwt;


    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.sendStatus(401) //Forbidden
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (errr, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403)
            const accessToken = jwt.sign(
                {
                    "username": decoded.username
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "30s" }
            );

            res.json({accessToken})
        }
    )



}
module.exports = { handleRefresh }
