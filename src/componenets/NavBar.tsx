import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {themeContext} from '../App';
import { useRecoilValue } from 'recoil';
import { cartItemCountState } from '../store/CartAtoms';
import Search from './Search';
import { getPost } from '../store/ProductsAtoms';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity:number;
}


const NavBar = () => {
  
  const {theme, setTheme} = useContext(themeContext); 

  const cartItemCount = useRecoilValue(cartItemCountState);
  
  const handleTheme = () => {
    switch(theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
      default:
        break;
    }
  } 




  return (
    <>
    <div className="navbar sticky top-0 z-10 bg-base-200" data-theme={theme}>
      <div className="dropdown md:hidden" id="category_drop-down">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/fashion">패션</Link>
          </li>
          <li>
            <Link to="/accessory">액세서리</Link>
          </li>
          <li>
            <Link to="/digital">디지털</Link>
          </li>
        </ul>
      </div>

   <div className='grow flex flex-row mx-8'>
        <h1 className='mx-8'><Link to='/'>React Shopping Shop</Link></h1>
        <div className='mx-8'><Link to='/fashion'>패션</Link></div>
        <div className='mx-8'><Link to='/accessory'>악세사리</Link></div>
        <div className='mx-8'><Link to='/digital'>디지털</Link></div>
        
        <div className="grow" id="space"></div>

        <div className="mr-5 cursor-pointer flex-none">
          {theme === 'light' ? (
            <button onClick={handleTheme}>라이트</button>
          ) : (
            <button onClick={handleTheme}>다크</button>
          )}
        </div>

        <Search />

        <label tabIndex={0} className="btn btn-ghost btn-circle" id="cart">
          <Link to="/cart" className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cartItemCount}
            </span>
          </Link>
        </label>
      </div>
      </div>
      </>
   
  )
}

export default NavBar