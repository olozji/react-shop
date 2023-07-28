import './index.css';
import NavBar from './componenets/NavBar'
import Page from './routers/Page';
import Footer from './componenets/Footer';
import {createContext,useEffect, useState} from 'react';



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

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
        <NavBar/>
        <Page/>
        <Footer/>
        </themeContext.Provider>
  )
}

export default App
