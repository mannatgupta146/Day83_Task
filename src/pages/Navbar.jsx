import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
      <h1>navbar</h1>
      <div className='flex gap-4 text-black p-2'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar
