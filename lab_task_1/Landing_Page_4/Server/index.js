require("dotenv").config();

const express = require("express");
const server = express();
const PORT = 2211;
const mongoDB = require('./connection.js')

server.set("view engine","ejs");
// server.set("views","./template/pages")
server.use(express.json());
server.use(express.static("public"))
// const fs = require("fs").promises;



server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })


const user = require("./routes/user.js")
server.use("/",user)

const crud = require("./routes/crud.js")
server.use("/api",crud)

























// Without Try Catch Code
// server.post("/api/products", async function (req, res) {
    

//     const { p_name, p_orig_price, p_sale_price, p_img, p_img_on_error } = req.body;

    
//     const product = new Products({
//         p_name,
//         p_orig_price,
//         p_sale_price,
//         p_img,
//         p_img_on_error
//     });


//     let saved_product = await product.save()
    
//     res.send(saved_product)
// })