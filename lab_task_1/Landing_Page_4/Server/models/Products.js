const mongoose = require("mongoose" );

let productsSchema = mongoose.Schema({
    p_name: String,
    p_orig_price: Number,
    p_sale_price: Number,
    p_img:  {
        data: Buffer,
        contentType: String
    },
    p_img_on_error:  {
        data: Buffer,
        contentType: String
    },
});
let  Products = mongoose.model("Products", productsSchema)
module.exports = Products;