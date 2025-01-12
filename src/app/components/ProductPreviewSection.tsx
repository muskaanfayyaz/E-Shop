'use client';

import { useState, useEffect } from 'react';
import { Product } from '../../app/types/product';
import Card from '../components/card'; // Assuming Card is your product card component
import { useRouter } from 'next/navigation';
import { getAllProducts } from '../../sanity/lib/getProducts';

const ProductPreviewSection = () => {
  // State for holding the products data
  const [products, setProducts] = useState<Product[]>([]);
  
  // Fetch products using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once

  // Take the first 6 products to display
  const previewProducts = products.slice(0, 6);

  const router = useRouter();

  // Function to navigate to all products page
  const navigateToAllProducts = () => {
    router.push('/product'); // Navigate to all products page
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Enhanced Section Heading */}
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-green-400 to-green-800 bg-clip-text mb-12">
          Discover Our Latest Products
        </h2>

        {/* Product Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {previewProducts.length > 0 ? (
            previewProducts.map((product) => (
              <div key={product._id}>
                <Card product={product} />
              </div>
            ))
          ) : (
            <div className="text-center col-span-full text-gray-500">Loading products...</div>
          )}
        </div>

        {/* Enhanced See All Button */}
        <div className="text-center mt-8">
          <button
            onClick={navigateToAllProducts}
            className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-green-600 to-green-800 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg"
          >
            See All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewSection;
