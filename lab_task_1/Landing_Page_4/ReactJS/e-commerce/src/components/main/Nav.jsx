import React from 'react'
import { useMatch, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container container">
          <h5 className="nav-logo">Wooden</h5>


          <ul className="nav-ul">
            <ToLink to="/" text="Home" />
            <ToLink to="/standard-shop" text="Shop" />
            <ToLink to="/products" text="Products" />
            <ToLink to="/blogs" text="Blog" />
            <ToLink to="/page" text="Page" />


            {/* <li className="nav-li"><a href="./index.html">Home</a> </li>
            <li className="nav-li"><a href="./standard-shop.html">Shop</a> </li>
            <li className="nav-li"> <a href="#Products">Products</a> </li>
            <li className="nav-li"> <a href="#Blog">Blog</a> </li>
            <li className="nav-li"> <a href="#Page">Page</a> </li> */}
          </ul>


          <div className="icon-btn-container">

          </div>
        </div>

      </nav>
    </>
  )
}



export default Nav;

function ToLink({ to, text }) {
  const resolvedPath = useResolvedPath(to);
  useMatch({ path: resolvedPath.pathname, end: true })
  return (<li className="nav-li"><Link to={to}>{text}</Link> </li>)
}