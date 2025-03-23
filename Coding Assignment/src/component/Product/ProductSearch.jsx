import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSearch } from '../../redux/actions/products.action';
import { Search } from 'lucide-react';

export const ProductSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.products.search);
  
  const handleSearchChange = (e) => {
    dispatch(setProductSearch(e.target.value));
  };
  
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearchChange}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500">
        <Search/>
      </div>
    </div>
  );
};