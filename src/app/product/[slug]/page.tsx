import { getAllProducts } from '../../../sanity/lib/getProducts';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';
import ProductDetailPageClient from '../../components/ProductDetailPageClient';

const ProductDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // Await the params to resolve the Promise
  const resolvedParams = await params;
  console.log('Resolved Params:', resolvedParams);

  // Fetch all products
  const products: Product[] = await getAllProducts();

  // Find product by slug
  const product = products.find((p) => p.slug?.current === resolvedParams.slug);

  if (!product) {
    // Render 404 page if product not found
    notFound();
    return null;
  }

  // Render client-side product details
  return <ProductDetailPageClient product={product} />;
};

export default ProductDetailPage;

// Generate static paths
export async function generateStaticParams() {
  const products: Product[] = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug?.current || '',
  }));
}
