// /src/app/product/[slug]/page.tsx
import { getAllProducts } from '../../../sanity/lib/getProducts';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';
import ProductDetailPageClient from '../../components/ProductDetailPageClient';

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  // Fetch all products from Sanity
  const products: Product[] = await getAllProducts();

  // Find the product by slug
  const product = products.find((p) => p.slug?.current === params.slug);

  if (!product) {
    // If product not found, trigger 404 page
    notFound();
    return null;
  }

  // Return the product details to the client component
  return <ProductDetailPageClient product={product} />;
};

export default ProductDetailPage;
