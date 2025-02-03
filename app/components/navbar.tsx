import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white text-green-800 shadow-md px-6 py-4">
      {/* Logo */}
      <div className="text-2xl">
        <Link href="/">
          <img src="/fashions.png" alt="Logo" width={70} className="cursor-pointer" />
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6 font-semibold text-lg">
        <li>
          <Link href="/product" className="hover:text-green-600 transition duration-300">
            Product
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-green-600 transition duration-300">
            About Us
          </Link>
        </li>
        
        <li>
          <Link href="/contact" className="hover:text-green-600 transition duration-300">
            Contact
          </Link>
        </li>
      </ul>

  
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg text-lg font-medium hover:bg-green-600 transition duration-300">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-transparent border-2 border-green-500 text-green-600 px-5 py-2 rounded-lg text-lg font-medium hover:bg-green-500 hover:text-white transition duration-300">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
