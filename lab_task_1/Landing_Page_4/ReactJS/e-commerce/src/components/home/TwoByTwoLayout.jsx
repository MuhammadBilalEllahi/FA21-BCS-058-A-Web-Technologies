import React from 'react'

function TwoByTwoLayout() {
  return (
    <>
       <section className="container-fluid bg-greyish shop-now  d-flex  align-items-center justify-content-center">
        <div className="d-flex col-12">

            <div className="row p-3 ">

                <div className="col-12 ">
                    <img className="col-12 " src="./public/banner-16.jpg" alt=""/>

                    <div className="description2 col-12 ">
                        <h6>Mid-Century Bookshelf</h6>
                        <p>Mid-century inspired, each bookshelf features tapered legs and a warm acorn finish that
                            recall
                            the era. Each of these is made using…</p>
                        <button className="border-0">Shop Now</button>
                    </div>


                </div>
            </div>

            <div className="row p-3">

                <div className="col-12 ">
                    <img className="col-12 " src="./public/banner-16.jpg" alt=""/>

                    <div className="description2 col-12 ">
                        <h6>Mid-Century Bookshelf</h6>
                        <p>Mid-century inspired, each bookshelf features tapered legs and a warm acorn finish that
                            recall
                            the era. Each of these is made using…</p>
                        <button className="border-0">Shop Now</button>
                    </div>


                </div>
            </div>



        </div>
    </section>
    </>
  )
}

export default TwoByTwoLayout
