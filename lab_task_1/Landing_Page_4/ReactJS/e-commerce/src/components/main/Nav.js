import React from 'react'

function Nav() {
  return (
    <>
       <nav  className="navbar">
        <div className="nav-container container">
            <h5 className="nav-logo">Wooden</h5>


            <ul className="nav-ul">
                <li className="nav-li"><a href="./index.html">Home</a> </li>
                <li className="nav-li"><a href="./standard-shop.html">Shop</a> </li>
                <li className="nav-li"> <a href="#Products">Products</a> </li>
                <li className="nav-li"> <a href="#Blog">Blog</a> </li>
                <li className="nav-li"> <a href="#Page">Page</a> </li>
            </ul>


            <div className="icon-btn-container">
             
            </div>
        </div>

    </nav>
    </>
  )
}



export default Nav;