import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (page: 'catalog' | 'checkout') => void;
  currentPage: 'catalog' | 'checkout';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('catalog')}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded"></div>
            <span className="text-gray-900">Oge Tibeb African Clothing</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('catalog')}
              className={`text-gray-700 hover:text-gray-900 ${
                currentPage === 'catalog' ? 'border-b-2 border-orange-500' : ''
              }`}
            >
              Shop
            </button>
          </nav>

          <button
            onClick={() => onNavigate('checkout')}
            className="relative p-2 text-gray-700 hover:text-gray-900"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
