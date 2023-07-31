import React from 'react'
import RenderCarousel from '../componenets/RenderCarousel'
import ItemList from '../componenets/ItemList'

const Home = () => {
  return (
    <>
    <RenderCarousel/>
    <ItemList page="home" category={"men's clothing" || "women's clothing"}/>
    <ItemList page="home" category={"jewelery"}/>
    <ItemList page="home" category={"electronics"}/>
    </>
  )
}

export default Home