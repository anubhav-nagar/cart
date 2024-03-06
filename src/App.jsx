import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { createContext } from 'react'
export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState(0);
  return (
    <>
      <CartContext.Provider value={{cart, setCart}}>
        <Navbar />
        <Content />
      </CartContext.Provider>
    </>
  )
}

export default App
