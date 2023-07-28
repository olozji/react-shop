import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {themeContext} from '../App';


const NavBar = () => {

  const {theme, setTheme} = useContext(themeContext); 
  
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
     </div>
    </div>
  )
}

export default NavBar