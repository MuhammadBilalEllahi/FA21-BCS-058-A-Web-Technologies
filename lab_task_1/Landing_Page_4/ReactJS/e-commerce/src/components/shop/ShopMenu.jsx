// This code is not component Based. next thing is too make it reusable in many places

import React from 'react'

function ShopMenu() {
  return (
    <>
       <section className="min-vh-100 mb-5">
        <div className="container mb-5 ">
            <div className="d-flex">
                <div className="aside col-3">
                    <div className="row">
                        <h4>Categories</h4>
                        <ul className="product-ul">
                            <li className="li">Bed</li>
                            <li className="li">Decor</li>
                            <li className="li">Furniture</li>
                            <li className="li">Kitchen</li>
                            <li className="li">Lighting</li>
                            <li className="li">Outdoor</li>
                            <li className="li">Table</li>
                        </ul>
                    </div>

                    <div className="row">
                        <h4>Price</h4>

                        <div className="p-2">
                            <input  type="range" min="1" max="100" value="50" id="price_range"/>

                        </div>
                    
                        <div className="p-3 d-flex">
                            <p>From: $<span id="price_from">1</span></p>
                            <p>To: $<span id="price_to">100</span></p>
                        </div>
                                                
                    </div>

                    

                    <div className="row">
                        <h4>Colors</h4>
                        <div className="colors ">
                            <div className="color" style={{"backgroundColor": "#ffffff;"}}></div>
                            <div className="color" style={{"backgroundColor": "#E7D3B4;"}}></div>
                            <div className="color" style={{"backgroundColor": "#292929;"}}></div>
                            <div className="color" style={{"backgroundColor": "#828282;"}}></div>
                            <div className="color" style={{"backgroundColor": "#303aff;"}}></div>
                            <div className="color" style={{"backgroundColor": "#ead118;"}}></div>
                            
                        </div>
                    </div>


                    <div className="row">
                        <h4>Size</h4>
                        <div className="colors ">
                         <button className="btn size-border ">L</button>
                         <button className="btn size-border ">M</button>
                         <button className="btn size-border ">S</button>
                        </div>
                    </div>

                    <div className="row">
                        <h4>Brands</h4>
                        <div className="wrap-brand ">
                         <button className=" brand-title ">Art Decor</button>
                         <button className=" brand-title ">Art Decor</button>
                         <button className=" brand-title ">Art Decor</button>
                         <button className=" brand-title ">Art Decor</button>
                         <button className=" brand-title ">Art Decor</button>
                         <button className=" brand-title ">Art Decor</button>

                        </div>
                    </div>

                    <div className="row pad-t">
                        <h4>Featured Product</h4>

                        <div className="d-flex f-prod">
                            <div className="cont-img">
                                <img src="./public/banner-8.jpg" alt=""/>
                            </div>
                            <div className="p-l-prod">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>
                        </div>

                        <div className="d-flex f-prod">
                            <div className="cont-img">
                                <img src="./public/banner-8.jpg" alt=""/>
                            </div>
                            <div className="p-l-prod">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>
                        </div>

                        <div className="d-flex f-prod">
                            <div className="cont-img">
                                <img src="./public/banner-8.jpg" alt=""/>
                            </div>
                            <div className="p-l-prod">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>
                        </div>

                        <div className="d-flex f-prod">
                            <div className="cont-img">
                                <img src="./public/banner-8.jpg" alt=""/>
                            </div>
                            <div className="p-l-prod">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="products col-9  min-vh-100">

                    <div className="d-flex justify-content-between">
                        <select className="border-1" name="" id="">
                            <option value="">Default Sorting</option>
                            <option value="">Sort by Popularity</option>
                            <option value="">Sort by Average Rating</option>
                            <option value="">Sort by Latest</option>
                        </select>

                        <option value="">Display</option>
                    </div>

                    <div className="d-flex flex-wrap mt-2 online-products-ajax">

                        
                        <div className="col-3 margin-product">
                            <div>
                                <img className="col-11" src="./public/product-2-600x655.jpg" alt=""/>
                            </div>
                            
                            <div className="p-l-prod-disp">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>


                        </div>

                        <div className="col-3 margin-product">
                            <div>
                                <img className="col-11" src="./public/product-9-1-600x655.jpg" alt=""/>
                            </div>
                            
                            <div className="p-l-prod-disp">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>


                        </div>
                        <div className="col-3 margin-product">
                            <div>
                                <img className="col-11" src="./public/product-27-600x655.jpg" alt=""/>
                            </div>
                            
                            <div className="p-l-prod-disp">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>


                        </div>

                        <div className="col-3 margin-product">
                            <div>
                                <img className="col-11" src="./public/prduct-18-600x655.jpg" alt="" onerror="
                                this.src = './public/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700'"/>
                            </div>
                            
                            <div className="p-l-prod-disp">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>


                        </div>


                        <div className="col-3 margin-product">
                            <div>
                                <img className="col-11" src="./public/product-51-600x655.jpg" alt=""/>
                            </div>
                            
                            <div className="p-l-prod-disp">
                                <h6>Upholstered Double Bed</h6>
                                <p><strike>200.00$</strike> <span>116.00$</span></p>
                            </div>


                        </div>
                        


                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default ShopMenu
