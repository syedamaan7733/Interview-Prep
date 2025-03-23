import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setProductsPerPage,
} from "../../redux/actions/products.action";
import { selectPaginationInfo } from "../../redux/selector";
import { login } from "../../redux/actions/auth.actions";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, totalProducts, totalPages } =
    useSelector(selectPaginationInfo);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));

    window.scrollTo({ top: 0 });
  };

  const handlePerPageChange = (e) => {
    dispatch(setProductsPerPage(e.target.value));
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      console.log(totalPages);

      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      // calculation
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-6 pb-6">
      <div className="mb-4 md:mb-0">
        <span className="text-gray-600 dark:text-gray-400">
          {/* Showing{" "}
          {Math.min(totalProducts, (currentPage - 1) * productsPerPage + 1)} to{" "}
          {Math.min(totalProducts, currentPage * productsPerPage)} of{" "}
totalProducts          {} products */}
          {`Showing ${Math.min(totalProducts, (currentPage - 1) * productsPerPage + 1)} to ${Math.min(totalProducts, currentPage * productsPerPage)} `}
        </span>

        <div className="mt-2">
          <label className="mr-2 text-gray-600 dark:text-gray-400">
            Items per page:
          </label>
          <select
            value={productsPerPage}
            onChange={handlePerPageChange}
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-2 text-gray-600 dark:text-gray-400">
              {page}
            </span>
          )
        )}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};
