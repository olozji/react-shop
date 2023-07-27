import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar sticky top-0 z-0 bg-slate-400'>
        <div className='flex flex-row mx-8'>
        <h1 className='mx-8'><Link to='/'>React Shopping Shop</Link></h1> 
        <div className='mx-8'><Link to='/fashion'>패션</Link></div>
        <div className='mx-8'><Link to='/accessory'>악세사리</Link></div>
        <div className='mx-8'><Link to='/digital'>디지털</Link></div>
     </div>
    </div>
  )
}

export default NavBar