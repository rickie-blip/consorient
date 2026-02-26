import React from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = ({ scrolled, currentPage, isMenuOpen, setIsMenuOpen, navigate }) => {
  const pages = ['home', 'about', 'services', 'projects', 'partners', 'contact'];
  const useLightNavbar = scrolled || currentPage !== 'home';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        useLightNavbar ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
            <div className={`p-2 rounded-lg mr-2 ${useLightNavbar ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}>
              <Zap size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${useLightNavbar ? 'text-blue-900' : 'text-white'}`}>
              CONSORIENT
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === page
                    ? useLightNavbar
                      ? 'text-blue-600'
                      : 'text-blue-300'
                    : useLightNavbar
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => navigate('contact')}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                useLightNavbar ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              Get a Quote
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={useLightNavbar ? 'text-gray-900' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 capitalize border-b border-gray-50"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
