import { getAllProducts } from '../../../sanity/lib/getProducts';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';
import ProductDetailPageClient from '../../components/ProductDetailPageClient'; // Client Component import

interface ProductDetailProps {
  params: { slug: string };
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
  const products: Product[] = await getAllProducts();
  const product = products.find((p) => p.slug?.current === params.slug);

  if (!product) {
    notFound(); // Show the 404 page if the product doesn't exist
  }

  return (
    <ProductDetailPageClient product={product} />
  );
};

export default ProductDetailPage;
