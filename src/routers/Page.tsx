import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import FashionPage from '../pages/FashionPage'
import AccessoryPage from '../pages/AccessoryPage'
import DigitalPage from '../pages/DigitalPage'
import Cart from '../pages/Cart';

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fashion' element={<FashionPage category={"men's clothing" || "women's clothing"}/>}></Route>
        <Route path='/accessory' element={<AccessoryPage category='jewelery'/>}></Route>
        <Route path='/digital' element={<DigitalPage category='electronics' />}></Route>
        <Route path="/products/:id" element={<Products />}></Route> 
        <Route path='/cart' element={<Cart />}></Route>     
      </Routes>
    </div>
  )
}

export default Page