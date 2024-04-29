const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) { this.users = data }
}

const fsPRomises = require('fs').promises;
const path = require('path')

const handleLogout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204)//No content to send back
    const refreshToken = cookies.jwt;

    // is refreshtoken in db
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser) {
        res.clearCookie('jwt',{httpOnly: true});
        return res.sendStatus(403)
    } 
   
    //delete refresh token in db
    const otherUsers = usersDB.users.filter(person=> person.refreshToken !== foundUser.refreshToken)

    const currentUSer = {...foundUser, refreshToken: ''}
    usersDB.setUsers([...otherUsers,currentUSer])
    await fsPRomises.writeFile(
        path.join(__dirname, "..", "model", "users.json"),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt',{httpOnly: true})
    res.sendStatus(204)
// put secure : true while in production



}
module.exports = { handleLogout }
