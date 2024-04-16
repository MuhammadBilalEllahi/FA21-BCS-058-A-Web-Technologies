require("dotenv").config();

const express = require("express");
const server = express();
const PORT = 2211;
const mongoDB = require('./connection.js')

server.set("view engine","ejs");
// server.set("views","./template/pages")
server.use(express.json());
server.use(express.static("public"))


// Added for Communication between different Hosts
const cors = require('cors');
server.use(cors())



server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })


const user = require("./routes/user.js")
server.use("/",user)

const crud = require("./routes/crud.js")
server.use("/api",crud)


