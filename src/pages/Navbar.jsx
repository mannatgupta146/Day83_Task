import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const Navbar = ({ theme, setTheme }) => {
  const [inputValue, setInputValue] = useState('')
  const data = useContext(UserDataContext)

  const navStyle = ({ isActive }) =>
    `px-3 py-1 rounded transition-all duration-200
     ${isActive 
        ? 'text-blue-600 font-semibold border-b-2 border-blue-600' 
        : 'text-gray-700 hover:text-blue-500'
     }`

  return (
    <div className="flex justify-center items-center gap-6 p-3 shadow">
      <h1 className="text-sm">
        theme is <span className="font-semibold">{theme}</span> {data}
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setTheme(inputValue)
          setInputValue('')
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder="enter color"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border px-2 py-1 rounded"
        />

        <button
          type="submit"
          className="px-3 py-1 bg-black text-white rounded"
        >
          Submit
        </button>
      </form>

      <NavLink to="/" className={navStyle}>
        Home
      </NavLink>

      <NavLink to="/about" className={navStyle}>
        About
      </NavLink>

      <NavLink to="/section" className={navStyle}>
        Section
      </NavLink>
    </div>
  )
}

export default Navbar
