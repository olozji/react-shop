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

useEffect(() => {
  // 여기서 Recoil 상태 업데이트 또는 비동기 작업을 처리
  setTheme('dark'); // 예시로 theme 상태를 dark로 업데이트
  // 비동기 작업 예시 (setTimeout을 사용한 비동기 처리)
  setTimeout(() => {
    console.log('Async operation complete');
    
  }, 2000);

}, []); // 빈 배열을 두어 컴포넌트가 처음 마운트될 때만 실행


  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <NavBar />
        <Page/>
        <Footer/>
        </div>
        </themeContext.Provider>
  )
}

export default App
