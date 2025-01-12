'use client';

import Image from 'next/image';
import { Product } from '../types/product';

const ProductDetailPageClient = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-12 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 hover:text-green-600 transition-all duration-300">
            {product.name}
          </h1>
          <p className="text-2xl text-green-600 font-semibold">PKR {product.price}</p>
          <p className="text-lg text-gray-700">{product.description}</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 ease-in-out flex-1">
              Buy Now
            </button>
            <button className="bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out flex-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPageClient;
