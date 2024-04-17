import React from 'react'



async function getData(){
  const res = await fetch("http://localhost:2211/api/products", {
    next:{
      revalidate: 30 // if web "visit"(not while being on page) after 30 sec then  refecth //BAD APPROACH I THINK
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
    {products.map(
      (product) =>(
        <div key={product._id}>
          <h1 >{product.p_name}</h1>
          
        </div>
    )
    )}
    </>
  )
}


