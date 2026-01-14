import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

  const [productData] = useContext(ProductDataContext)

  let renderData = (
    <div className="text-center w-full text-gray-500 text-lg">
      Loading...
    </div>
  )

  if (productData.length > 0) {
    renderData = productData.map((elem) => (
      <Link
        key={elem.id}
        to={`/products/${elem.id}`}
        className='w-[22%] bg-white/90 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center'
      >
        <img
          src={elem.image}
          alt={elem.title}
          className='h-40 w-40 object-contain object-center mb-3'
        />

        <h2 className='text-sm font-medium text-center text-gray-800 line-clamp-2'>
          {elem.title}
        </h2>
      </Link>
    ))
  }

  return (
    <div className='px-4 py-8 flex gap-6 flex-wrap justify-center'>
      {renderData}
    </div>
  )
}

export default Products
