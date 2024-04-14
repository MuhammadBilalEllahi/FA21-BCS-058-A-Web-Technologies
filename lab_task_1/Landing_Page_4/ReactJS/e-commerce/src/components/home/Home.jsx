import React from 'react'
import ImageSider from './ImageSider'
import InfoCards from './InfoCards'
import ShopByCategory from './ShopByCategory'
import BestSellers from './BestSellers'
import ImageContainer from './ImageContainer'

function Home() {
  return (
    <>
      <ImageSider/>
      <InfoCards/>
      <ShopByCategory/>
      <BestSellers/>
      <ImageContainer/>
      
    </>
  )
}

export default Home
