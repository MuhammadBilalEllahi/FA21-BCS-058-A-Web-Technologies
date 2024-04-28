const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ "message": "username and password required" })

    const duplicate = usersDB.users.find(person => person.username === user);
    if (duplicate) return res.sendStatus(409)
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newuser = {
            "username": user, 
            "password": hashedPwd
        }

        usersDB.setUsers([...usersDB.users, newuser])
        await fsPromises.writeFile(
            path.join (__dirname,"..","model", "users.json"),
            JSON.stringify(usersDB.users)
            
        )

        console.log(usersDB.users)
        res.status(201).json({"succes": `new user ${user} created!`})
    }
    catch (err) {
        res.status(500).json({ "message": err.message })
    }

}
module.exports ={handleNewUser}
