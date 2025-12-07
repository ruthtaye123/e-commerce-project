import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { CatalogPage } from './components/CatalogPage';
import { CheckoutPage } from './components/CheckoutPage';

type Page = 'catalog' | 'checkout';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('catalog');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main>
          {currentPage === 'catalog' ? (
            <CatalogPage />
          ) : (
            <CheckoutPage onNavigate={setCurrentPage} />
          )}
        </main>
      </div>
    </CartProvider>
  );
}
