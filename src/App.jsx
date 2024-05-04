import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo'
import NavBar from './assets/NavBar'
import Cards from './assets/Cards'
import Footer from './assets/Footer'
import Contacto from './assets/Contacto'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <NavBar />
    <Logo />
    <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Cards />} />
      <Route path={'/Contacto'} element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

  )
}

export default App
