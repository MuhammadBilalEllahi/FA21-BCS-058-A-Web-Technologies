require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const PORT = 2211;
// const fs = require("fs").promises;
const fs = require("fs");
let Products = require("./models/Products.js")

server.set("view engine","ejs");
server.use(express.json());
server.use(express.static("public"))

server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })
mongoose.connect("mongodb://localhost:27017/Products")
const db = mongoose.connection;


db.on("error", (error) => { console.error(error) });
db.once("open", () => { console.log("Connected to database") });


server.get("/", function (req, res) {
    // res.send("Un Authorized")
    res.render("shop", {title: "Main Page"})
});

server.get("/shop", async function (req, res) {
    res.render("shop", { title: "This is EJS Title"})
})



server.get("/api/products", async function (req, res) {
    let product = await Products.find();
    res.send(product)
})


server.get("/shops", async function (req, res) {
    let product = await Products.find();
    res.render("shops",{title: "Product Shop", products: product})
})


server.get("/api/products/:id", async function (req, res) {
    let product = await Products.findById(req.params.id);
    res.send(product)
})

server.delete("/api/products/:id", async function (req, res) {
    let product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send("Record Not Found")
    res.send({ "message": "Deleted Successfuly" })
});






server.put("/api/products/:id", async function (req, res) {
    let product = await Products.findById(req.params.id);
    // if(!product) return res.status(404).send("Record Not Found")


    console.log(req.body,req.body.name, req.body.address)

    product.name = req.body.name;
    product.address = req.body.address;
    await product.save()
    res.send({ "message": "Added Successfuly" })
});




server.post("/api/products", async function (req, res) {
    let data = req.body;
    let product = new Products(data)
    await product.save()
    res.send(product)
})




server.get("/api/products/refresh", async function (req, res) {
    try {
        const data = await fs.readFile("./dumb.json", "utf-8");
        const productDataFromFile = JSON.parse(data);

        await Products.insertMany(productDataFromFile);
        res.send({ "message": "Data refreshed" });
    } catch (error) {
        console.error("Error refreshing data:", error);
        res.status(500).send("Internal Server Error");
    }
});



/*? Test  */

// fetch('http://localhost:2211/api/products/6609a178622a3db23003c8a8', {
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
  

async function uploadImageToMongoDB() {
    try {
        
        const imageData = fs.readFileSync('../public/product-27-600x655.jpg');

        
        const newProduct = new Products({
            p_name: 'A New Product',
            p_orig_price: 100,
            p_sale_price: 80,
            p_img: {
                data: imageData,
                contentType: 'image/jpeg' 
            }
        });

        
        await newProduct.save();
        console.log('Image uploaded to MongoDB successfully');
    } catch (error) {
        console.error('Error uploading image to MongoDB:', error);
    }
}


// uploadImageToMongoDB();