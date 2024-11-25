import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Form from "./components/Form/Form.jsx";
import './index.css'


createRoot(document.getElementById('root')).render(
      <BrowserRouter>
          <StrictMode>
              <Header title='Магазин сертификатов'/>
              <Routes>
                  <Route path="/" element={<Main/>} exact></Route>
                  <Route path="/:id" element={<Form/>} exact/>
              </Routes>
              <Footer year='2024' title='Магазин сертификатов'/>
          </StrictMode>
      </BrowserRouter>
)
