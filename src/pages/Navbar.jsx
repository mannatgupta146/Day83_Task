import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          MyStore
        </h1>

        {/* Links */}
        <div className="flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-medium transition
              ${
                isActive
                  ? 'text-black after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-black after:rounded'
                  : 'text-gray-600 hover:text-black'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-sm font-medium transition
              ${
                isActive
                  ? 'text-black after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-black after:rounded'
                  : 'text-gray-600 hover:text-black'
              }`
            }
          >
            Products
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
