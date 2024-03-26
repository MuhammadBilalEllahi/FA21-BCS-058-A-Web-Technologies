require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2211;
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on("error", (error)=>{console.error(error)});
db.once("open", ()=>{console.log("Connected to database")});

app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})
