import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './assets/Hero'
import NavBar from './assets/NavBar'
import Card from './assets/Card'
import ItemListContainer from './assets/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
    <NavBar />
    <Hero />
    <Card />
    <ItemListContainer />
   </div>

  )
}

export default App
