import React from 'react';
import logo from '../assets/images/logo.png';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-70 w-auto" src={logo} alt="logo" />
          </div>

          {/*Search */}
          <Search />
          
          
          {/* Navigation Links */}
          <div className="flex space-x-10">
            <a href="#home" className="text-gray-800 hover:text-[#b378e6] font-medium">Home</a>
            <a href="#popular" className="text-gray-800 hover:text-[#b378e6] font-medium">Popular</a>
            <a href="#brands" className="text-gray-800 hover:text-[#b378e6] font-medium">Brands</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;