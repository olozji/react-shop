import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'

const Page = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fashion' element={<Products category="fashion"/>}></Route>
        <Route path='/accessory' element={<Home/>}></Route>
        <Route path='/digital' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default Page