require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const PORT = 2211;
let Student = require("./models/Student.js")

const fs = require("fs").promises;

server.use(express.json())

server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
// process.env.DATABASE_URL
// mongoose.connect("mongodb://localhost/StudentsDB")
mongoose.connect("mongodb://localhost:27017/StudentsDB")
const db = mongoose.connection;


db.on("error", (error) => { console.error(error) });
db.once("open", () => { console.log("Connected to database") });


server.get("/", function (req, res) {
    res.send("Un Authorized")
});


server.get("/api/students", async function (req, res) {
    let students = await Student.find();
    res.send(students)
})


server.get("/api/students/:id", async function (req, res) {
    let students = await Student.findById(req.params.id);
    res.send(students)
})

server.delete("/api/students/:id", async function (req, res) {
    let student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send("Record Not Found")
    res.send({ "message": "Deleted Successfuly" })
});






server.put("/api/students/:id", async function (req, res) {
    let student = await Student.findById(req.params.id);
    // if(!student) return res.status(404).send("Record Not Found")


    console.log(req.body, req.body.name, req.body.address)

    student.name = req.body.name;
    student.address = req.body.address;





    await student.save()
    res.send({ "message": "Added Successfuly" })
});




server.post("/api/students/", async function (req, res) {
    let data = req.body;
    let student = new Student(data)
    await student.save()
    res.send(student)
})




server.get("/api/students/refresh", async function (req, res) {
    try {
        const data = await fs.readFile("./dumb.json", "utf-8");
        const studentDataFromFile = JSON.parse(data);

        await Student.insertMany(studentDataFromFile);
        res.send({ "message": "Data refreshed" });
    } catch (error) {
        console.error("Error refreshing data:", error);
        res.status(500).send("Internal Server Error");
    }
});



/*? Test  */

// fetch('http://localhost:2211/api/students/6609a178622a3db23003c8a8', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: 'New Name',
//       address: 'New Address'
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
