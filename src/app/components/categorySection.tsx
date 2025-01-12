'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CategorySection = () => {
  const router = useRouter();

  const navigateToCategory = (category: string) => {
    router.push(`/${category}`); // Navigate to respective category page
  };

  return (
    <div className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Heading for the category section */}
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-green-400 to-green-900 text-transparent bg-clip-text mb-16 leading-tight tracking-wide">
          Explore Our <span className="text-black">Categories</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Men Image */}
          <div
            onClick={() => navigateToCategory('men')}
            className="relative w-[300px] h-[400px] cursor-pointer rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            <Image
              src="/men.png" // Corrected path
              alt="Men"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-400 to-green-900 text-transparent bg-clip-text text-xl font-semibold shadow-lg">
                Men
              </span>
            </div>
          </div>

          {/* Women Image */}
          <div
            onClick={() => navigateToCategory('women')}
            className="relative w-[300px] h-[400px] cursor-pointer rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            <Image
              src="/women.png" // Corrected path
              alt="Women"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text text-xl font-semibold shadow-lg">
                Women
              </span>
            </div>
          </div>

          {/* Children Image */}
          <div
            onClick={() => navigateToCategory('children')}
            className="relative w-[300px] h-[400px] cursor-pointer rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            <Image
              src="/children.png" // Corrected path
              alt="Children"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[50px] rounded-br-[50px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text text-xl font-semibold shadow-lg">
                Children
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
