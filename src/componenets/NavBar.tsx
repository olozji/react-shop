import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {themeContext} from '../App';
import { useRecoilValue } from 'recoil';
import { cartItemCountState } from '../store/CartAtoms';


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
    <div className="navbar sticky top-0 z-0" data-theme={theme}>
        <div className='flex flex-row mx-8'>
        <h1 className='mx-8'><Link to='/'>React Shopping Shop</Link></h1> 
        <div className='mx-8'><Link to='/fashion'>패션</Link></div>
        <div className='mx-8'><Link to='/accessory'>악세사리</Link></div>
        <div className='mx-8'><Link to='/digital'>디지털</Link></div>
        <div>
          {theme === 'light' ? (
            <button onClick={handleTheme}>라이트</button>
          ): (
            <button onClick={handleTheme}>다크</button>
          )
          }
        </div>
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">
            {cartItemCount}
          </span>
        </Link>
      </label>
     </div>
    </div>
  )
}

export default NavBar