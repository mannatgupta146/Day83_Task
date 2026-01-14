import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {

  const [productData] = useContext(ProductDataContext)
  const { productId } = useParams()

  const selectedProduct = productData.find(
    (elem) => elem.id === Number(productId)
  )

  if (!selectedProduct) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center text-gray-500">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 flex justify-center py-12 px-6">

      {/* Card */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 flex justify-center items-center p-8">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="h-95 object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center gap-5">

          <div>
            <h1 className="text-3xl font-semibold text-gray-900 leading-snug">
              {selectedProduct.title}
            </h1>
            <p className="text-sm uppercase tracking-wide text-gray-400 mt-1">
              {selectedProduct.category}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">
              $ {selectedProduct.price}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              ⭐ {selectedProduct.rating.rate}
              <span className="text-gray-400">
                ({selectedProduct.rating.count})
              </span>
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed border-t pt-5">
            {selectedProduct.description}
          </p>

          <div className="mt-4">
            <button className="px-10 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-md">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductsDetail
