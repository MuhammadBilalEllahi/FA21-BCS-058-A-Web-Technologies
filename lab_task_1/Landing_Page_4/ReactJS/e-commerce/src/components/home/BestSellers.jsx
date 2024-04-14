import React from 'react'

function BestSellers() {
  return (
    <>
      <section className="container-fluid ">
        <div className="shop-by-category ">
            <div className="d-flex justify-content-between">
                <h2>Bestsellers</h2>


                <div>
                    <button className="btn">
                        Bed
                    </button>
                    <button className="btn">
                        Decor
                    </button>
                    <button className="btn">
                        Furniture
                    </button>
                    <button className="btn">
                        Lighting
                    </button>
                    <button className="btn">
                        Table
                    </button>
                </div>
            </div>
        </div>


        <div className="slider-container">
            <div className="slider-wrappers">
                <button id="previous-slide" className="btn slide-btn material-symbols-outlined">
                    chevron_left
                </button>
                <div className="img-list container">

                    <div className="img-item img-container">
                        <div className="d-flex align-items-center">
                            <div className="container">
                                <img className="item-img" src="./public/product-18-600x655.jpg" alt=""/>
                            </div>

                            <div className="column container">
                                <h6 className="bestseller-h6">Fabric Bed</h6>
                                <p className="bestseller-p">Lorem ipsum dolor sit amet...</p>
                                <h6 className="bestseller-price">200.0$</h6>

                                <hr/>
                                <div className="d-flex justify-content-between ">
                                    <h6 className="bestseller-h6">Bed </h6>
                                    <h6>Cart</h6>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="img-item img-container">
                        <div className="d-flex align-items-center">
                            <div className="container">
                                <img className="item-img" src="./public/product-27-600x655.jpg" alt=""/>
                            </div>

                            <div className="column container">
                                <h6 className="bestseller-h6">Fabric Bed</h6>
                                <p className="bestseller-p">Lorem ipsum dolor sit amet...</p>
                                <h6 className="bestseller-price">200.0$</h6>

                                <hr/>
                                <div className="d-flex justify-content-between ">
                                    <h6 className="bestseller-h6">Bed </h6>
                                    <h6>Cart</h6>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="img-item img-container">
                        <div className="d-flex align-items-center">
                            <div className="container">
                                <img className="item-img" src="./public/product-31-600x655.jpg" alt=""/>
                            </div>

                            <div className="column container">
                                <h6 className="bestseller-h6">Fabric Bed</h6>
                                <p className="bestseller-p">Lorem ipsum dolor sit amet...</p>
                                <h6 className="bestseller-price">200.0$</h6>

                                <hr/>
                                <div className="d-flex justify-content-between ">
                                    <h6 className="bestseller-h6">Bed </h6>
                                    <h6>Cart</h6>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="img-item img-container">
                        <div className="d-flex align-items-center">
                            <div className="container">
                                <img className="item-img" src="./public/product-18-600x655.jpg" alt=""/>
                            </div>

                            <div className="column container">
                                <h6 className="bestseller-h6">Fabric Bed</h6>
                                <p className="bestseller-p">Lorem ipsum dolor sit amet...</p>
                                <h6 className="bestseller-price">200.0$</h6>

                                <hr/>
                                <div className="d-flex justify-content-between ">
                                    <h6 className="bestseller-h6">Bed </h6>
                                    <h6>Cart</h6>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

                <button id="next-slide" className="btn slide-btn material-symbols-outlined">
                    chevron_right
                </button>
            </div>
        </div>

    </section>
    </>
  )
}

export default BestSellers
