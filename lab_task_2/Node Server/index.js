require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const PORT = 2211;
let Student = require("./models/Student.js")

server.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)})
// process.env.DATABASE_URL
// mongoose.connect("mongodb://localhost/StudentsDB")
mongoose.connect("mongodb://localhost:27017/StudentsDB")
const db = mongoose.connection;


db.on("error", (error)=>{console.error(error)});
db.once("open", ()=>{console.log("Connected to database")});


server.get("/",function(req,res){
    res.send("Hello")
});


server.get("/api/students", async function  (req,res){
    let students = await Student.find();
    res.send(students)
})


server.get("/api/students/:id", async function  (req,res){
    let students = await Student.findById(req.params.id);
    res.send(students)
})