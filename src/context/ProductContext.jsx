import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

    const [productData, setProductData] = useState([])

    const getData = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products/')
        setProductData(response.data)
        console.log("jjjjjjjjjjjjjjjj");
    }

    useEffect(() => {
        getData()
    }, [])
    

  return (
    <ProductDataContext.Provider value={[productData, setProductData]}>
        {props.children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
