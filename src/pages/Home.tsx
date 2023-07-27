import React from 'react'
import Carousel from '../componenets/Carousel'
import ItemList from '../componenets/ItemList'

const Home = () => {
  return (
    <>
    <Carousel/>
    <ItemList page="home" category="fashion"/>
    <ItemList page="home" category="accessory"/>
    <ItemList page="home" category="digital"/>
    </>
  )
}

export default Home