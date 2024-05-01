const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute")
const bodyParser = require("body-parser")

const dbConnect = require("./config/dbConnect")
dbConnect()

// app.use(bodyParser()) //deprecated
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: false}))


app.use("/api/user", authRouter)


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})
