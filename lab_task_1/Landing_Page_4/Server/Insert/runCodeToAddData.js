const mongoose = require("mongoose");
const Products = require("../models/Products"); 

mongoose.connect("mongodb://localhost:27017/Products", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productsData = [
    {
      p_name: "Laptop",
      p_orig_price: 1200,
      p_sale_price: 999,
      p_img: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      },
      p_img_on_error: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      }
    },
    {
      p_name: "Smartphone",
      p_orig_price: 800,
      p_sale_price: 699,
      p_img: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
        contentType: "image/png"
      },
      p_img_on_error: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
        contentType: "image/png"
      }
    },
    {
      p_name: "Headphones",
      p_orig_price: 150,
      p_sale_price: 99,
      p_img: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
        contentType: "image/jpeg"
      },
      p_img_on_error: {
        data: Buffer.from("../../public/product-2-600x655.jpg", "base64"),
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