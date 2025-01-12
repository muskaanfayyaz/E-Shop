'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 border-b-2 border-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Store Name with Gradient */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800 font-[Poppins]">
          E-Shop
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-500 transition-all duration-300">
            Home
          </Link>
          <Link href="/men" className="hover:text-green-500 transition-all duration-300">
            Men
          </Link>
          <Link href="/women" className="hover:text-green-500 transition-all duration-300">
            Women
          </Link>
          <Link href="/children" className="hover:text-green-500 transition-all duration-300">
            Children
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-4 bg-white text-black w-48 rounded shadow-md z-50">
              <Link href="/" className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                Home
              </Link>
              <Link href="/men" className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                Men
              </Link>
              <Link href="/women" className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                Women
              </Link>
              <Link href="/children" className="block px-4 py-2 hover:bg-green-500 hover:text-white">
                Children
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
