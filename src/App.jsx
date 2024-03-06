import { useState, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'

export const CartContext = createContext(null);
export const TotalContext = createContext(0);

function App() {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
          <TotalContext.Provider value={{ total, setTotal }}>
              <Navbar />
              <Content />
          </TotalContext.Provider>
      </CartContext.Provider>
    </>
  )
}

export default App
