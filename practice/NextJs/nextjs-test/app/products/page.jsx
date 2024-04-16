import React from 'react'



async function getData(){
  const res = await fetch("http://localhost:2211/api/products")
  return res.json()

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


