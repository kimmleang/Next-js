'use client'
import { fetchPosts } from '@/app/services/feedService';
import React, { use, useEffect, useState } from 'react';

interface Product {
  id: number;
  body: string;
  createdAt: string;
}


const Product = () => {
  
  //fetch data from feedservice
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    fetchPosts().then((data) => {
      console.log('Fetched Data:', data);
      setProducts(data);
    });
  })

  // return (
  //   <div className="flex flex-wrap justify-around">
  //     {products.map((product) => (
  //       <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4">
  //         <div className="font-bold text-xl mb-2">Post ID: {product.id}</div>
  //         <p className="text-gray-700 text-base">{product.body}</p>
  //         <p className="text-gray-500 text-sm">Created At: {new Date(product.createdAt).toLocaleString()}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Product;