import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

type Category = 'all' ;

export const CatalogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },


  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">African Clothing Collection</h1>
        <p className="text-gray-600">Authentic African fashion designed for the workplace and every occasion.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category.value
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
