import React from 'react'

function ShopByCategory() {
  return (
    <>
       <section className="container-fluid ">
        <div className="shop-by-category ">
            <div className="d-flex justify-content-between">
                <h2>Shop By Category</h2>
                <button className="btn">View all</button>
            </div>


            <div className="col-12 container-fluid mt-5 d-flex">
                <div className="col-3">
                    <div className="column">
                        <div className="d-flex">
                            <img src="./public/banner-8.jpg" alt=""/>
                        </div>
                        <div className="description ">
                            <h6>Furniture</h6>
                            <p>6 products</p>
                        </div>
                    </div>
                </div>


                <div className="col-3">
                    <div className="column">
                        <div className="d-flex">
                            <img src="./public/banner-8.jpg" alt=""/>
                        </div>
                        <div className="description ">
                            <h6>Furniture</h6>
                            <p>6 products</p>
                        </div>
                    </div>
                </div>


                <div className="col-3">
                    <div className="column">
                        <div className="d-flex">
                            <img src="./public/banner-8.jpg" alt=""/>
                        </div>
                        <div className="description ">
                            <h6>Furniture</h6>
                            <p>6 products</p>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="column">
                        <div className="d-flex">
                            <img src="./public/banner-8.jpg" alt=""/>
                        </div>
                        <div className="description ">
                            <h6>Furniture</h6>
                            <p>6 products</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default ShopByCategory
