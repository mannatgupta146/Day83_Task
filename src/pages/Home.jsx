import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Discover Products <br />
            That Match Your Style
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Shop the latest trends, premium quality items, and unbeatable deals —
            all in one place.
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate('/products')}
              className="px-10 py-4 bg-black text-white rounded-2xl text-lg font-medium hover:bg-gray-800 transition shadow-lg"
            >
              Explore Products
            </button>

            <button
              className="px-10 py-4 border border-gray-300 rounded-2xl text-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white border border-gray-200 rounded-3xl shadow-xl p-10">
            <h2 className="text-xl font-semibold mb-4">Why Shop With Us?</h2>

            <ul className="flex flex-col gap-4 text-gray-600">
              <li>✔ Premium quality products</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Fast & secure checkout</li>
              <li>✔ Trusted by thousands</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
