import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
import Section from './pages/Section'

const App = () => {
  const [theme, setTheme] = useState('light')


  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/section' element={<Section />} />
      </Routes>
    </div>
  )
}

export default App
