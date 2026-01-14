import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductsDetail />} />
      </Routes>
    </div>
  )
}

export default App
