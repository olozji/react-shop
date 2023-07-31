import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import FashionPage from '../pages/FashionPage'
import AccessoryPage from '../pages/AccessoryPage'
import DigitalPage from '../pages/DigitalPage'

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fashion' element={<FashionPage/>}></Route>
        <Route path='/accessory' element={<AccessoryPage/>}></Route>
        <Route path='/digital' element={<DigitalPage/>}></Route>
        {/* <Route path="/product/:pid" element={<Products />}></Route>       */}
      </Routes>
    </div>
  )
}

export default Page