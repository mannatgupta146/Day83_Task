import React, { createContext, useEffect, useState } from 'react'
import { getAllData } from '../api/ProductApi'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

    const setData = async () =>{
        const data = await getAllData()
        setProductData(data)
    }

    useEffect(() => {
        setData()
    }, [])
    

  return (
    <ProductDataContext.Provider value={[productData, setProductData]}>
        {props.children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
