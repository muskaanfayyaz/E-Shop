import { getAllProducts } from '../../sanity/lib/getProducts';
import { Product } from '../../app/types/product';
import Card from '../components/card';

const MenPage = async () => {
  // Fetch all products
  const products: Product[] = await getAllProducts();

  // Log the fetched products to the console to inspect data
  console.log('Fetched products:', products);

  // Filter products to display only those from the 'Men' category
  const menProducts = products.filter((product) => product.category?.name.toLowerCase() === 'men');

  // Log the filtered products
  console.log('Filtered men products:', menProducts);

  return (
    <div className="container mx-auto mt-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <h1 className="text-5xl font-extrabold text-center text-green-600 mb-12 leading-tight tracking-wide">
        Discover the Finest of <span className="text-black">Men&apos;s Fashion</span>
      </h1>

      {/* Skeleton Loader while loading products */}
      {!menProducts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array(8)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-200 h-80 animate-pulse"
              ></div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menProducts.length > 0 ? (
            menProducts.map((product) => (
              <div key={product._id}>
                <Card product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-gray-600">
              No products available in the Men&apos;s category.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MenPage;
