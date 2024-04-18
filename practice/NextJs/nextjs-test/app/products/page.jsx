import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react'
import Loading from '../loading';








async function getData(){
  // await new Promise(resolve => setTimeout(resolve,3000))
  const res = await fetch("http://localhost:2211/api/products", {
    next:{
      revalidate: 0 //if zero  then generateStaticParams is redundent

      // revalidate: 0 // if web "visit"(not while being on page) after 30 sec then  refecth //BAD APPROACH I THINK
      // // 0 to opt out of cache
    }
  })

  
  return res.json()

  // This is cached after 1st run. So, for realtime u have to tell next to refetch it

  // .then(
  //   (res)=> res.json()
  // )
}
export default  async function Products() {

  const products = await getData();
  console.log(products)
  
  return (
    <>
    
    <div className=' flex flex-wrap'>
      
    {products.map(
      (product) =>(
        
        <div key={product._id} className=' w-60 m-2 p-2 border-teal-400 border'>
          <Link href={`/products/${product._id}`}>
            <Image 
            className=' w-full p-2'
            src={`data: ${product.p_img.contentType};base64,${ Buffer.from(product.p_img.data).toString('base64')}`}
              
            // onError={(e)=>{e.target.src ="/product-9-1-600x655.jpg"}}
            
            alt={product.p_name}
            width={200}
            height={200}
            
            />
          <h1 >{product.p_name}</h1>
          <p>Price: <strike className=" text-red-900">{product.p_orig_price}</strike>$</p>
          <p>New Price: {product.p_sale_price}$</p>
          </Link>
        </div>
        
    )
    )}
    
    </div>
    </>
  )
}


