require("dotenv").config();
const express = require("express");

const server = express();
const PORT = 2211;
// const fs = require("fs").promises;
const mongoDB = require('./connection.js')



server.set("view engine","ejs");
// server.set("views","./template/pages")
server.use(express.json());
server.use(express.static("public"))

server.listen(PORT, () => { console.log(`server running on port ${PORT}`) })


server.get("/", function (req, res) {
    // res.send("Un Authorized")
    res.render("index", {title: "Main Page"})
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














// RESTFUL METHODS
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
    const productId = req.params.id;
    const { p_name, p_orig_price, p_sale_price, p_img, p_img_on_error } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "Invalid product ID" });
        }

        let product = await Products.findById(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        if (p_name) product.p_name = p_name;
        if (p_orig_price) product.p_orig_price = p_orig_price;
        if (p_sale_price) product.p_sale_price = p_sale_price;
        if (p_img) product.p_img = p_img;
        if (p_img_on_error) product.p_img_on_error = p_img_on_error;

        // if (!p_name || !p_orig_price || !p_sale_price || !p_img || !p_img_on_error) {
        //     return res.status(400).json({ error: "Incomplete product data" });
        // }

        await product.save();

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
    }
});






server.post("/api/products", async function (req, res) {
    const { p_name, p_orig_price, p_sale_price, p_img, p_img_on_error } = req.body;

    try {
        if (!p_name || !p_orig_price || !p_sale_price || !p_img || !p_img_on_error) {
            return res.status(400).json({ error: "Incomplete product data" });
        }

        if (typeof p_orig_price !== "number" || typeof p_sale_price !== "number") {
            return res.status(400).json({ error: "Invalid price format" });
        }

        if (!p_img || typeof p_img !== "object" || !p_img.data || !p_img.contentType) {
            return res.status(400).json({ error: "Invalid main image data" });
        }

        if (!p_img_on_error || typeof p_img_on_error !== "object" || !p_img_on_error.data || !p_img_on_error.contentType) {
            return res.status(400).json({ error: "Invalid error image data" });
        }

        const product = new Products({
            p_name,
            p_orig_price,
            p_sale_price,
            p_img,
            p_img_on_error
        });

        const savedProduct = await product.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Failed to save product" });
    }
});




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
  





/*? Test  */
// async function uploadImageToMongoDB() {
//     try {
        
//         const imageData = fs.readFileSync('../public/product-27-600x655.jpg');

        
//         const newProduct = new Products({
//             p_name: 'A New Product',
//             p_orig_price: 100,
//             p_sale_price: 80,
//             p_img: {
//                 data: imageData,
//                 contentType: 'image/jpeg' 
//             }
//         });

        
//         await newProduct.save();
//         console.log('Image uploaded to MongoDB successfully');
//     } catch (error) {
//         console.error('Error uploading image to MongoDB:', error);
//     }
// }


// uploadImageToMongoDB();





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