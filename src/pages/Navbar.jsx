import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-semibold tracking-wide text-gray-800">
          MyStore
        </h1>

        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? 'text-black border-b-2 border-black pb-1'
                  : 'text-gray-600 hover:text-black'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? 'text-black border-b-2 border-black pb-1'
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
