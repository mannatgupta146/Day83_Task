import React, { createContext } from 'react'

export const ProductDataContext = createContext()

const ProductContext = (props) => {
  return (
    <div>
      <ProductDataContext.Provider>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
