import React from 'react'

function ImageContainer() {
  return (
    <>
      <section className="container ">
        <div className="d-flex ">
            <div className="row p-4 col-8">
                <div className="d-flex col-12 justify-content-between">

                    <img className="col-6 sale" src="/home_assets/banner//banner-12.jpg" alt=""/>
                    <img className="col-6 sale" src="/home_assets/banner//banner-13.jpg" alt=""/>

                </div>

                <img className="col-12" src="/home_assets/banner//banner-14.jpg" alt=""/>

            </div>

            <img className="col-5 p-4" src="/home_assets/banner//banner-15.jpg" alt=""/>

        </div>
    </section>

    </>
  )
}

export default ImageContainer
