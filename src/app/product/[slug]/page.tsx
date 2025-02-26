// // /src/app/product/[slug]/page.tsx
// import { getAllProducts } from '../../../sanity/lib/getProducts';
// import { Product } from '../../types/product';
// import ProductDetailPageClient from '../../components/ProductDetailPageClient';
// import { notFound } from 'next/navigation';

// const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
//   // Await params to ensure they are fully resolved before using them
//   const { slug } = await params; // Ensure you await `params`

//   // Fetch all products
//   const products: Product[] = await getAllProducts();

//   // Find product based on the slug
//   const product = products.find((p) => p.slug?.current === slug);

//   if (!product) {
//     notFound(); // Trigger 404 if product not found
//     return null;
//   }

//   // Return product details to the client component
//   return <ProductDetailPageClient product={product} />;
// };

// export default ProductDetailPage;

// src/app/product/[slug]/page.tsx
import { getAllProducts } from '../../../sanity/lib/getProducts';
import { Product } from '../../types/product';
import ProductDetailPageClient from '../../components/ProductDetailPageClient';
import { notFound } from 'next/navigation';

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // ✅ No need for await

  // ✅ Fetch all products dynamically
  const products: Product[] = await getAllProducts();

  // ✅ Find product based on the slug
  const product = products.find((p) => p.slug?.current === slug);

  if (!product) {
    notFound(); // ✅ Ensure 404 works correctly
  }

  return <ProductDetailPageClient product={product} />;
};

export default ProductDetailPage;
