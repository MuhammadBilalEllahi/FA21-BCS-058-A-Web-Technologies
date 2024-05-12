const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    comment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Submitted",
        enum: ["Submitted", "Contacted", "In Progress"]
    }
});

//Export the model
module.exports = mongoose.model('Enquiry', enquirySchema);