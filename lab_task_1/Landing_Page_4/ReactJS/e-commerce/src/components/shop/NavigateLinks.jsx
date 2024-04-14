/* eslint-disable jsx-a11y/anchor-is-valid */


import React from 'react'

function NavigateLinks() {
  return (
    <>
      <section className="container d-flex justify-content-center align-items-center ">
        <div className="links p-5">
            <div>
                <h2>Shop</h2>
                <div className="d-flex">
                    <a href="#">Home</a>
                    <span>{'>'}</span>
                    <a href="#">Shop</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NavigateLinks
