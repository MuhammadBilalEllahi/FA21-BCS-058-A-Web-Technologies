const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute")

const dbConnect = require("./config/dbConnect")
dbConnect()



app.use("/api/user", authRouter)


app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})
