const mongoose = require("mongoose");

let studentsSchema = mongoose.Schema({
    name: String,
    address: String,
});
let  Student = mongoose.model("Student", studentsSchema)
module.export = Student;