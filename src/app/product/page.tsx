"use client";

import { useEffect, useState } from "react";
import { getAllProducts } from "../../sanity/lib/getProducts";
import { Product } from "../types/product";
import Card from "../components/card";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null); // Set initial state to null

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-24 px-4 sm:px-6 md:px-8 lg:px-12"> {/* Increased margin-top */}
      {/* Enhanced Heading */}
      <h2 className="text-4xl font-extrabold text-center text-green-600 mb-10">
        Explore Our <span className="text-black">All Products</span>
      </h2>

      {/* Skeleton Loader */}
      {!products ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-200 h-80 animate-pulse"
              ></div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.slug?.current || product._id}>
                <Card product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600">
              No products available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
