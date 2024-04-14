import React from 'react'

function ImageSider() {
  return (
    <>
      <section id="backToTop" className="hero-container">
        <div className="slider-wrapper">

            <div className="slider">
                <img id="slide-1"
                    src="https://cdn.shopify.com/s/files/1/0702/2834/5113/files/Kamar-Monokrom-Bernuansa-Gelap.webp"
                    alt="" />
                <img id="slide-2"
                    src="https://cdn.shopify.com/s/files/1/0702/2834/5113/files/Kamar-Monokrom-Elemen-Kayu.webp"
                    alt="" />
                <img id="slide-3" src="https://pexio.co.id/cdn/shop/articles/Desain-Kamar-Monokrom.webp?v=1672890762"
                    alt="" />
                <img id="slide-4"
                    src="https://cdn.shopify.com/s/files/1/0702/2834/5113/files/Kamar-Monokrom-Minimalis.webp" alt="" />
            </div>

            <div className="slider-nav">
                <a href="#slide-1"> </a>
                <a href="#slide-2"> </a>
                <a href="#slide-3"> </a>
                <a href="#slide-4"> </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default ImageSider
