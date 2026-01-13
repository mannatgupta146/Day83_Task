import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = () => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeDataContext.Provider>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
