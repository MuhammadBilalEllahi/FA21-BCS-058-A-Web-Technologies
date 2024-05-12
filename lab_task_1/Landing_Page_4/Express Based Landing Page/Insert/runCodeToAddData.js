const mongoose = require("mongoose");
const Products = require("../models/Products"); 

mongoose.connect("mongodb://localhost:27017/Products", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productsData = [
    {
      p_name: "Wood",
      p_orig_price: 120,
      p_sale_price: 99,
      p_img: {
        // data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
        data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      },
      p_img_on_error: {
        data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      }
    },
    {
      p_name: "Nokia",
      p_orig_price: 80,
      p_sale_price: 69,
      p_img: {
        data: Buffer.from("../public/product-18-600x655.jpg.jpg", "base64"),
        contentType: "image/png"
      },
      p_img_on_error: {
        data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
        contentType: "image/png"
      }
    },
    {
      p_name: "Camera",
      p_orig_price: 90,
      p_sale_price: 59,
      p_img: {
        data: Buffer.from("../public/product-27-600x655.jpg.jpg", "base64"),
        contentType: "image/jpeg"
      },
      p_img_on_error: {
        data: Buffer.from("../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      }
    }
  ];

Products.insertMany(productsData)
  .then(() => {
    console.log("Sample products data inserted successfully");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting sample products data:", err);
    mongoose.connection.close();
  });