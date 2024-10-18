import { useState } from 'react'
import path from './assets/apple.svg'
import Cart from './Components/Cart'
import Products from './Components/Products'
import './styles/global.css'

function App() {
  return (
    <div className='container'>
    <Products />
    <Cart />
    </div>
  )
}

export default App
