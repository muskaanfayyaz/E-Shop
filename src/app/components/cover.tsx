'use client';

import Image from 'next/image';
import coverImage from '/public/cover1.png'; // Replace with your image path
import Link from 'next/link';

const CoverPage = () => {
  return (
    <div className="relative bg-black text-white flex items-center justify-center py-10 lg:py-20">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center space-y-10 md:space-y-0">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900 font-[Poppins]">
            E-Shop
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide leading-relaxed">
            &quot;Style that Speaks. Quality that Stays.&quot;
          </p>
          <p className="text-md sm:text-lg md:text-xl font-light text-gray-300 leading-relaxed">
            Discover trendsetting fashion, premium quality, and everyday essentials tailored just for you. 
            Let your style shine with E-Shop!
          </p>
          <Link href="/product">
            <button className="mt-4 px-6 sm:px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
            {/* Using Next.js Image component */}
            <Image
              src={coverImage} // Using the imported image
              alt="E-Shop Cover"
              width={500}
              height={600}
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
