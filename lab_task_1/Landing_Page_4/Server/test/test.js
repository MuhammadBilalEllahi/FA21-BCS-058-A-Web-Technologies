
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




