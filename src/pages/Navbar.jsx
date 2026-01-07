import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
      <h1>navbar</h1>
      <div className='flex gap-4 text-black p-2'>
        
        <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Home</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
