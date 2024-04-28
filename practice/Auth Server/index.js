const express = require("express");
const server = express();
const PORT = 1122;
// const mongoDB = require('./db/connection')
const cors = require('cors');
let ejs_layout = require("express-ejs-layouts")
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOption');


server.use(ejs_layout)
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.static("public"))
server.use(cors())



// custom middleware logger
server.use(logger);
server.use(cors(corsOptions));
server.use(express.json());


const registerRouter = require("./routes/api/register")
server.use("/register",registerRouter)


const loginRouter = require("./routes/api/auth")
server.use("/login",loginRouter)


server.get("*", async function (req, res) {

    res.send("Page Not Found")
})

server.use(errorHandler);
server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
