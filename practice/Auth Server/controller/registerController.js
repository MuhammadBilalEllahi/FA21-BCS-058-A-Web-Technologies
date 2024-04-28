const usersDB = {
    users: require("../model/users.json"),
    setUsers: function(data)  {this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');

const bcrypt = require('bcrpyt')

const handleNewUser = async (req,res)=>{
    const {user,pwd} = req.body;
    if(!user||!pwd) return res.status(400).json({"message": "username and password required"})

    const duplicate = usersDB.users.find(person => person.username ===user);
    if(duplicate) return res.sendStatus(409)
    try{
const hashedPwd = await bcrypt.hash(pwd,10);

    }
    catch(err){
        res.status(500).json({"message": err.message})
    }

}

