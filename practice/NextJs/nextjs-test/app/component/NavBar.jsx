import React, { Suspense } from 'react'
import Link from "next/link";
import Loading from '../loading';
import Products from '../products/page';

export default function NavBar() {
  return (
    <>
      <nav className=" flex ">
          <h3>Shop</h3>

          <Link className="links" href="/">Home</Link>
          <Link className="links" href="/products">Products</Link>


          {/* <h1>Data from Layout can be seen in every dependent PAge</h1> */}
        </nav>
        <h3>All Products are</h3>
        <Suspense fallback={<Loading/>}>
            <Products/>
        </Suspense>
    </>
  )
}
