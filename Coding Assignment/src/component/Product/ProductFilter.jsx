import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductFilter } from "../../redux/actions/products.action";
import { selectCategories } from "../../redux/selector";
export const ProductFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentFilter = useSelector((state) => state.products.filter);

  const handleFilterChange = (e) => {
    dispatch(setProductFilter(e.target.value));
  };
  console.log(categories);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Filter by category
      </label>
      <select
        value={currentFilter}
        onChange={handleFilterChange}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none  dark:bg-gray-700 dark:text-white"
      >
        <option value="all">All categories</option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
