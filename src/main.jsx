import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Footer from "./components/Footer/Footer.jsx";

createRoot(document.querySelector('body')).render(
  <StrictMode>
      <Header title='Магазин сертификатов'/>
      <Main>
          <Cards/>
      </Main>
      <Footer year='2024' title='Магазин сертификатов'/>
  </StrictMode>,
)
