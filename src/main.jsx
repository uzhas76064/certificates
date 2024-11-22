import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

createRoot(document.querySelector('body')).render(
  <StrictMode>
      <Header title='Магазин сертификатов'/>
      <Main>

      </Main>
  </StrictMode>,
)
