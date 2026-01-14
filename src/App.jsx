import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductsDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
