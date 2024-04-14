import React from 'react'
import ImageSider from './ImageSider'
import InfoCards from './InfoCards'
import ShopByCategory from './ShopByCategory'
import BestSellers from './BestSellers'
import ImageContainer from './ImageContainer'
import TwoByTwoLayout from './TwoByTwoLayout'
import InstaBoxes from './InstaBoxes'
function Home() {
  return (
    <>
      <ImageSider/>
      <InfoCards/>
      <ShopByCategory/>
      <BestSellers/>
      <ImageContainer/>
      <TwoByTwoLayout/>
      <InstaBoxes/>
    </>
  )
}

export default Home
