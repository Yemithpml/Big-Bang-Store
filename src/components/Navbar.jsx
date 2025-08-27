import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Search from './Search';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink:0 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="logo" className="h-70 w-auto" />
        </div>

        {/* Search Bar */}
      <div className="flex-grow flex justify-center px-4">
        <div className="w-full max-w-md">
          <Search />
        </div>
      </div>

        {/* Larger screens Nav Links */}
        <div className="hidden lg:flex space-x-12">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-[#b378e6] font-medium">Home</button>
          <button onClick={() => scrollToSection('products')} className="text-gray-800 hover:text-[#b378e6] font-medium">Products</button>
          <Link to="/popular" className="text-gray-800 hover:text-[#b378e6] font-medium">Popular</Link>
          <Link to="/new" className="text-gray-800 hover:text-[#b378e6] font-medium">New</Link>
          <Link to="/deals" className="text-gray-800 hover:text-[#b378e6] font-medium">Best Deals</Link>
        </div>

        {/* Cart and Mobile Menu*/}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-xl">🛒</Link>
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 mt-4 pb-6">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-[#b378e6] font-medium">Home</button>
          <button onClick={() => scrollToSection('products')} className="text-gray-800 hover:text-[#b378e6] font-medium">Products</button>
          <Link to="/popular" className="text-gray-800 hover:text-[#b378e6] font-medium">Popular</Link>
          <Link to="/new" className="text-gray-800 hover:text-[#b378e6] font-medium">New</Link>
          <Link to="/deals" className="text-gray-800 hover:text-[#b378e6] font-medium">Deals</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;