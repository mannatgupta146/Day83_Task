import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div>
      home

      <button 
      className='bg-emerald-500 px-4 py-2 rounded-md'
      onClick={()=>{
        navigate('/products')
      }}
      >
        Explore Products
      </button>
      
    </div>
  )
}

export default Home
