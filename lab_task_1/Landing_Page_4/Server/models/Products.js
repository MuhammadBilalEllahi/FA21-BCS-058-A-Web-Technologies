const mongoose = require("mongoose");

let productsSchema = mongoose.Schema({
    p_name: String,
    p_orig_price: String,
    p_sale_price: String,
});
let  Products = mongoose.model("Products", productsSchema)
module.exports = Products;