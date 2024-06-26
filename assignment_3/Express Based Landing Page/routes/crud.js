const express = require("express");
const crud = express.Router();
let Products = require("../models/Products.js")
const fs = require("fs");
const { db } = require("../connection.js")
const { ObjectId } = require('mongodb');
const path = require('path')

const {logger} = require("../middlewares/logEvents")
crud.use(logger)

// RESTFUL METHODS

// GET
// GET BY ID
crud.get("/products/:id", async function (req, res) {
    let product = await Products.findById(req.params.id);
    res.send(product)
})
// GET ALL
crud.get("/products", async function (req, res) {
    let product = await Products.find();
    res.send(product)
})

// crud.get("/productsname", function (req, res) {



//   const cursor =  db.collection("products").find(
//         {}, {
//         // projection: { p_name: 1 }
//     }
//     )
//     // .toArray(
//     //     (error, result) => {
//     //         if (error) {
//     //             res.send(error)
//     //         }
//     //         if (result) {
//     //             result.forEach(doc => console.log(doc))
//     //           }
//     //         res.send(result)
//     //     }
//     // ).catch((e) => res.send(e.toString()));
//     res.send(cursor.forEach(element => {
//         element
//     }))

// })









// DELETE
crud.delete("/products/:id", async function (req, res) {
    let product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send("Record Not Found")
    res.send({ "message": "Deleted Successfuly" })

    // we can also use filter and delte which is same and updating data
});
// Delte All
crud.delete("/deleteallwhere", (req, res) => {

    //  {
    //     "p_name": "Delete where value is same as here"
    //  }



    db.collection("products").deleteMany(
        req.body,
        (error, resData) => {
            if (error) {
                res.send(error.toString())
            }
            res.send(resData)
        }

    ).catch((e) => res.send(e.toString()))
})

// Delte where one value of x is found
crud.delete("/deleteonewhere", (req, res) => {

    //  {
    //     "p_name": "Delete where value is same as here"
    //  }



    db.collection("products").deleteOne(
        req.body,
        (error, resData) => {
            if (error) {
                res.send(error.toString())
            }
            res.send(resData)
        }

    ).catch((e) => res.send(e.toString()))
})











// PUT (As a PATCH)
crud.put("/products/:id", async function (req, res) {
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

// crud.put("/update/:id", (req,res)=>{


//     const objectId = new ObjectId(req.params.id) //Some new keyword problem
//     console.log(objectId)

//     db.collection("products").updateOne(
//         {id: objectId},
//         {$set: req.body},
//         (error,resData)=>{
//             if(error){
//                 res.send(error.toString())
//             }
//             res.send(resData)
//         }

//     )
// })



// PATCH (Adds/removes fields from all records)
crud.patch("/updateall/:id", (req, res) => {

    // Add Records
    // {
    //     "$set": {
    //         "p_new": "val"
    //     }
    // }

    // Remove Records

    // {
    //     "$unset": {
    //         "p_new": "val"
    //     }
    // }



    db.collection("products").updateMany(
        {},
        // {...req.body},
        req.body,
        (error, resData) => {
            if (error) {
                res.send(error.toString())
            }
            res.send(resData)
        }

    )
})



crud.patch("/updateall/:id", (req, res) => {

    // Filter and Add Records to that specific record
    // {
    //     "filter": {
    //         p_name: "Wooden Table"  //to update each and every record in db then remove this field  p_name: "Wooden Table" from here
    //     },

    //     "data": {
    //         $set: {
    //             p_orig_price: 298 //or add new field
    //         } 
    //     }

    // }




    db.collection("products").updateMany(
        req.body.filter,
        // {...req.body},
        req.body.data,
        (error, resData) => {
            if (error) {
                res.send(error.toString())
            }
            res.send(resData)
        }

    )
})









// POST
crud.post("/products", async function (req, res) {
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


// Refresh
crud.get("/products/refresh", function (req, res) {
    console.log("here0")
    try {
        console.log("here1")
        const data = fs.readFile(path.join(__dirname,"..", "dumb.json"), "utf-8");
        console.log("here")
        const productDataFromFile = JSON.parse(data);

        // Products.insertMany(productDataFromFile);
        res.send({ "message": "Data refreshed" });
    } catch (error) {
        console.error("Error refreshing data:", error);
        res.status(500).send("Internal Server Error");
    }
});




// Asynchronously read the file
fs.readFile(path.join(__dirname,"..", "dumb.json"), 'utf-8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
    } else {
        // console.log(data); 
    }
});



module.exports = crud;