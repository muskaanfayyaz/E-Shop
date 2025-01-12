// /components/Card.tsx
import Image from 'next/image';
import { Product } from '../types/product'; // Import the Product type
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons
import Link from 'next/link'; // Import Link component

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <div className="card rounded-lg shadow-lg p-4 bg-white flex flex-col items-center">
      <Image
        src={product.image.asset.url}
        alt={product.name}
        width={300}
        height={300}
        className="object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>

      {/* Flex container for price and cart icon */}
      <div className="flex justify-between w-full items-center mt-2">
        <p className="text-gray-600">PKR {product.price}</p>
        <div className="text-2xl text-gray-700 cursor-pointer">
          <FaShoppingCart />
        </div>
      </div>

      {/* Link for "View Details" */}
      <Link href={`/product/${product.slug?.current}`}>
        <span className="block mt-4 text-green-500 hover:underline text-center">
          View Details
        </span>
      </Link>
    </div>
  );
};

export default Card;
