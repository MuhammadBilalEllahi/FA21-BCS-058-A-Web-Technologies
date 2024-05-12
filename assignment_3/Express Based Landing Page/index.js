require("dotenv").config();

const express = require("express");
const server = express();
const PORT = 2211;
const mongoDB = require('./connection.js')
const emitter = require('./Emitter/emitter.js')

let ejs_layout = require("express-ejs-layouts")
server.use(ejs_layout)

server.set("view engine", "ejs");
// server.set("views","./template/pages")
server.use(express.json());
server.use(express.static("public"))


// Added for Communication between different Hosts
const cors = require('cors');
server.use(cors())


// const bodyParser = require('body-parser');
// server.use(bodyParser.json({ limit: '100mb' }));
// server.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })


// const user = require("./routes/user.js")
// server.use("/",user)

// const crud = require("./routes/crud.js")
// server.use("/api",crud)

// Better make modules thus, 
const apiRouter = require("./routes/routes.js")
server.use(apiRouter)


server.get("*", async function (req, res) {

    res.send("Page Not Found")
})



