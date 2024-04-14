// src/components/ProductListing.js

import React, { useState, useEffect } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:2211/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Error fetching products:', error));
  }, []);

  return (
    <div className="d-flex flex-wrap mt-2 online-products-ajax">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="col-3 margin-product">
            <div>
              <img
                className="col-11"
                src={`data:${product.p_img.contentType};base64,${Buffer.from(
                  product.p_img.data
                ).toString('base64')}`}
                alt={product.p_name}
              />
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
    </div>
  );
};

export default ProductListing;
