import React, { useState } from 'react';
import {Buffer} from 'buffer';

// const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     for (let i = 0; i < bytes.byteLength; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return btoa(binary);
//   };
const ProductImage = ({ product }) => {


    
  const [imageSrc, setImageSrc] = useState(
    // `data:${product.p_img.contentType};base64,${product.p_img.data.toString('base64')}`
    `data:${product.p_img.contentType};base64,${Buffer.from(product.p_img.data).toString('base64')}`
    // `data:${product.p_img.contentType};base64,${arrayBufferToBase64(product.p_img.data)}`


  );

//   console.log(imageSrc +" is "+ product.p_name +"and  "+ `data:${product.p_img.contentType};base64,${product.p_img.data.toString('base64')}` +"\n"+ `data:${product.p_img.contentType};base64,${Buffer.from(product.p_img.data).toString('base64')}`)


  const handleImageError = () => {
    setImageSrc('/home_assets/error_images/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700');
  };

  return (
    <>
      <img
        className="col-11"
        src={imageSrc}
        alt={product.p_name}
        onError={handleImageError}
      />
    </>
  );
};

export default ProductImage;
