const express = require("express");
const server = express();
const PORT = 1122;
// const mongoDB = require('./db/connection')
const cors = require('cors');
let ejs_layout = require("express-ejs-layouts")
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOption');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require("./middleware/credentials")

server.use(ejs_layout)
server.set("view engine", "ejs");
server.use(express.json());
server.use(express.static("public"))



 

// custom middleware logger
server.use(credentials)
server.use(logger);
server.use(cors(corsOptions));
server.use(express.json());
server.use(cookieParser())

const registerRouter = require("./routes/register")
server.use("/register",registerRouter)


const authRouter = require("./routes/auth")
server.use("/login",authRouter)
server.use("/refresh",require("./routes/refresh"))
server.use("/logout",require("./routes/logout"))


server.use(verifyJWT);
server.use('/employees', require('./routes/api/employees'));



server.get("*", async function (req, res) {

    res.send("Page Not Found")
})



server.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

server.use(errorHandler);
server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
