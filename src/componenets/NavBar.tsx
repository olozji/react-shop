import React ,{useContext} from 'react'
import darkThemeButton from '../assets/theme/dark.svg';
import lightThemeButton from '../assets/theme/light.svg';
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
    <nav className="navbar sticky top-0 z-10 bg-base-200" data-theme={theme}>
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

   <div className='flex-none hidden md:block'>
    <ul className='menu menu-horizontal p-0'>
        <h1 className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white mx-8'><Link to='/'>React Shopping Shop</Link></h1>
        <div className='block py-2 pl-3 pr-4 font-semibold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8'><Link to='/fashion'>패션</Link></div>
        <div className='block py-2 pl-3 pr-4 font-semibold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8'><Link to='/accessory'>악세사리</Link></div>
        <div className='block py-2 pl-3 pr-4 font-semibold text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:border-gray-700 mx-8'><Link to='/digital'>디지털</Link></div>
        </ul>
        </div>
        <div className="grow" id="space"></div>

        <div className="mr-5 cursor-pointer ">
          {theme === 'light' ? (
             <img
             src={darkThemeButton}
             className="w-5 h-5"
             alt="다크모드"
             onClick={handleTheme}
           />
          ) : (
            <img
            src={lightThemeButton}
            className="w-5 h-5"
            alt="라이트모드"
            onClick={handleTheme}
          />
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
      </nav>
   
  )
}

export default NavBar