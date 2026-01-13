import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const { productData, getData } = useContext(ProductDataContext)


  return (
    <div>
      home

      <button onClick={()=>{
        navigate('/products')
      }}>Get all</button>

      <button onClick={()=>{
        getData()
      }}>Get items</button>

      
    </div>
  )
}

export default Home
