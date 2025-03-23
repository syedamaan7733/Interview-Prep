import React from 'react';

export const ProductCard = ({ product }) => {
  return (//added anition too
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-104 hover:shadow-lg">
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 flex-1 mr-2">{product.title}</h3>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-md whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="mt-2">
          <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-md">
            {product.category}
          </span>
        </div>
        
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {product.description}
        </p>
        
        <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};