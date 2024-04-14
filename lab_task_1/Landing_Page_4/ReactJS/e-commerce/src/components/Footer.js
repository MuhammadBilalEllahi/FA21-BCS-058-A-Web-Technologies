import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="bg-greyish p-5">

<div className="d-flex justify-content-between">

    <div className="row">
        <ul className="ul">
            <h3>Wooden</h3>
            <li className="li">Rains HQ, Jens Olsens Vej 13 , <br/>8200 Aarhus N, Denmark</li>
            <li className="li"><span className="t-dark">Email:</span> dowecoshop@gmail.com</li>
            <li className="li"><span className="t-dark">Phone:</span> (+84) 123 567 712</li>
        </ul>
    </div>


    <div className="row">
        <ul className="ul">
            <li className="font-s-b">About Us</li>
            <li className="li">Our Shops</li>
            <li className="li">Contact</li>
            <li className="li">Artists</li>
            <li className="li">Local Giving</li>
            <li className="li">Press</li>
        </ul>
    </div>


    <div className="row">
        <ul className="ul">
            <li className="li font-s-b">Get Help</li>
            <li className="li">Delivery Information</li>
            <li className="li">Terms & Conditions</li>
            <li className="li">Returns & Refunds</li>
            <li className="li">Privacy Notice</li>
            <li className="li">Shopping FAQs</li>
        </ul>
    </div>


    <div className="row w-c">
        <ul className="ul">

        <li className="li font-s-b">Subscribe To Our Newsletter!</li>
        <li className="li">Don't miss the latest news on brands and products…!</li>
        <li className="li">
          <div>
            <input className="input-newsletter" placeholder="Your email.." type="text"/> 
            <button className="btn-newsletter" type="submit">Send</button>
          </div>
        </li>

        <li className="li d-flex">
            <a href="#" className="circle-icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>

            <a href="#" className="circle-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>

            <a href="#" className="circle-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>

            <a href="#" className="circle-icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
        </li>

        </ul>
    </div>
</div>


</footer>

    </>
  )
}

export default Footer
