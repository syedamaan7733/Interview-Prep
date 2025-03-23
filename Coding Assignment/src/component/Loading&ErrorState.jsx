import React from "react";

export const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Loading products...
      </p>
    </div>
  );
};

export const ErrorState = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-4 py-3 rounded relative max-w-xl">
        <h2 className="font-bold text-lg mb-2">Error Loading Products</h2>
        <p>{error || "Something went wrong. Please try again later."}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200"
        >
          Retry
        </button>
      </div>
    </div>
  );
};
