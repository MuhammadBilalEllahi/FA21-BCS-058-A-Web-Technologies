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
    images: [],
    // images: {
    //     type: Array
    // },
    // color: {
    //     type: String,
    //     required: true
    //     // enum: ['Black', 'Brown', 'Red']
    // },
    color: [

    ],
    // color: [ change this tomorrow
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "ProductCategory"
    //     }
    // ],
    tags: [],


    // teacher code
    isFeatured: {
        type: Boolean,
        default: false
    },
    // teacher code


    sold: {
        type: Number,
        default: 0,
        select: false //hides sold data from users
    },
    ratings: [{
        star: Number,
        comment: String,
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