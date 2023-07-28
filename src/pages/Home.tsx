import React from 'react'
import RenderCarousel from '../componenets/RenderCarousel'
import ItemList from '../componenets/ItemList'

const Home = () => {
  return (
    <>
    <RenderCarousel/>
    <ItemList page="home" category="fashion"/>
    <ItemList page="home" category="accessory"/>
    <ItemList page="home" category="digital"/>
    </>
  )
}

export default Home