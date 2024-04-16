import React from 'react'
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className=" flex ">
          <h3>Shop</h3>

          <Link className="links" href="/">Home</Link>
          <Link className="links" href="/tickets">Tickets</Link>


          {/* <h1>Data from Layout can be seen in every dependent PAge</h1> */}
        </nav>
    </>
  )
}
