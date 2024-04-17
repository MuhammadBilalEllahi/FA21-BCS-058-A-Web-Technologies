import dynamic from 'next/dynamic';
import React from 'react'

export const dynamicParams = false // to give error is id is entered in url is not found
// To make this static (built at build time)
export async function generateStaticParams(){
  const res = await fetch("http://localhost:2211/api/products");

  const products = await res.json()

 return  products.map((product)=>({
    id: product._id
  }))
}
// To make this static 

async function getData(id){
    await new Promise(resolve => setTimeout(resolve,3000))
    const res = await fetch(`http://localhost:2211/api/products/${id}`)
    if(!res.ok){
        notFound()
      }
    return res.json()
  
  }

export default async function ProductUnit({params}) {
    const id = params.id;
    // this param.id is get from url
    const products = await getData(id); 

    // 6619a5422a7bfba1201ef8ce use as id
  return (
    <div>
      <h1>{products.p_name}</h1>
      <p>{products.p_orig_price}$</p>
    </div>
  )
}
// Dynamic rendering: fetch data at request time when page loads. This is useful when the data changes frequently.
// Static rendering: fetch data at build time. This is useful when the data does not change often and can be generated at build time.
