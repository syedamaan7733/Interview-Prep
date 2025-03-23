import React from 'react';
import ProductList from '../component/Product/ProductList';


const ProductsPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsPage;