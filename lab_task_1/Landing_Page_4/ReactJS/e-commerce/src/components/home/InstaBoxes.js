import React from 'react'

function InstaBoxes() {
  return (
    <>
       <section className="container-fluid ">
        <div className="shop-by-category ">
            <div className="d-flex ">
                <h4>Our Instagram</h4>

            </div>


            <div className="mt-3 d-flex justify-content-between">


                <img className="col-2 insta-pic" src="./public/instagram-1.jpg" alt=""/>
                <img className="col-2 insta-pic" src="./public/instagram-2.jpg" alt=""/>
                <img className="col-2 insta-pic" src="./public/instagram-3.jpg" alt=""/>
                <img className="col-2 insta-pic" src="./public/instagram-4.jpg" alt=""/>
                <img className="col-2 insta-pic" src="./public/instagram-5.jpg" alt=""/>


            </div>

        </div>
    </section>
    </>
  )
}

export default InstaBoxes
