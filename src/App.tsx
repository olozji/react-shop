import './index.css';
import NavBar from './componenets/NavBar'
import Page from './routers/Page';
import Footer from './componenets/Footer';
import {createContext,useEffect, useState} from 'react';
import { useRecoilValue } from 'recoil';
import { getPost } from './store/ProductsAtoms';



interface Theme {
  theme:string;
  setTheme:(theme:string) => void;
}

export const themeContext = createContext<Theme>({
  theme:'',
  setTheme:(theme) => {},
})


function App() {

const [theme, setTheme] = useState<string>('light');
const fetchProductData = useRecoilValue(getPost);


  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <NavBar products={fetchProductData}/>
        <Page/>
        <Footer/>
        </div>
        </themeContext.Provider>
  )
}

export default App
