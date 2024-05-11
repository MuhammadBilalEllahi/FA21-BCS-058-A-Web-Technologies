const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category"
    },
    brand: {

        type: String,
        required: true
        // enum: ['Apple', 'Samsung', 'Lenovo']
    },
    quantity: {
        type: Number,
        required: true
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        required: true
        // enum: ['Black', 'Brown', 'Red']
    },
    sold: {
        type: Number,
        default: 0,
        select: false //hides sold data from users
    },
    ratings: [{
        star: Number,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }],
    totalratings: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);