import React from 'react'

const Product = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
    { id: 4, name: 'Product 4', price: '$40' },
    { id: 5, name: 'Product 5', price: '$50' },
  ]

  return (
    <div className="flex flex-wrap justify-around">
      {products.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4 m-2 w-1/6 text-center">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Product