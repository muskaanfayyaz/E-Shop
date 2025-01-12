import { getAllProducts } from '../../../sanity/lib/getProducts';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';
import ProductDetailPageClient from '../../components/ProductDetailPageClient'; // Client Component import

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  // Log params to debug
  console.log('Params:', params);

  // Fetch all products from Sanity
  const products: Product[] = await getAllProducts();

  // Find the specific product by slug
  const product = products.find((p) => p.slug?.current === params.slug);

  if (!product) {
    // If no product is found, render a 404 page
    notFound();
    return null; // Ensure TypeScript understands this path ends here
  }

  // Render the product detail client component
  return <ProductDetailPageClient product={product} />;
};

export default ProductDetailPage;

// Function to generate static parameters for the dynamic route
export async function generateStaticParams() {
  const products: Product[] = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug?.current || '', // Ensure slug is safely accessed
  }));
}
