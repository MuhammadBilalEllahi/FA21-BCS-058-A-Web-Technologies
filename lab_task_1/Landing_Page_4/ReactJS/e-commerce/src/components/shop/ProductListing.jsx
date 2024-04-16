// src/components/ProductListing.js

import React, { useState, useEffect } from 'react';
import ProductImage from './ProductImage';



const ProductListing = () => {

    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:2211/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Error fetching products:', error));
  }, []);


  // console.log(products[3].p_img.contentType)
  // console.log(products[3].p_img.data)
  // console.log(products[3].p_img.data.toString())
  return (
    <>
      {products.length > 0 ? (
        
        products.map((product, index) => (
          
          <div key={index} className="col-3 margin-product">
            <div>
            <ProductImage product={product}/>
              {/* <img
                className="col-11"
                src={`data:${product.p_img.contentType};base64,${product.p_img.data.toString('base64') }`}
                alt={product.p_name}
                // onerror={"this.src = '/public/home_assets/banner/banner-10.jpg'"}
                onError={ ()=> {this.src = '/home_assets/error_images/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700' }}

              /> */}
              
            </div>
            <div className="p-l-prod-disp">
              <h6>{product.p_name}</h6>
              <p>
                <strike>{product.p_orig_price.toFixed(2)}$</strike>
                <span>{product.p_sale_price.toFixed(2)}$</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </>
  );
};

export default ProductListing;
