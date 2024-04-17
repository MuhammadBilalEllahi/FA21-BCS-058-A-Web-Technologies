import React from 'react'

async function getData(id){
    const res = await fetch(`http://localhost:2211/api/products/${id}`)
    
    return res.json()
  
  }

export default async function ProductUnit({params}) {
    const id = params.id;
    // this param.id is get from url
    const products = await getData(id); 

    // 6619a5422a7bfba1201ef8ce use as id
  return (
    <div>
      {products.p_name}
    </div>
  )
}
