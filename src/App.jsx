import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import View from './pages/View'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view/:pid' element={<View />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
