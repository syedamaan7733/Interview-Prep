import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSort } from '../../redux/actions/products.action';

export const ProductSort = () => {
  const dispatch = useDispatch();
  const currentSort = useSelector(state => state.products.sort);
  
  const handleSortChange = (e) => {
    dispatch(setProductSort(e.target.value));
  };
  
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Sort by
      </label>
      <select
        value={currentSort}
        onChange={handleSortChange}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};
