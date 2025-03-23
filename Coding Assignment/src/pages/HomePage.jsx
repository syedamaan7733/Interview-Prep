import { CarTaxiFrontIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to ProductMall
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {/* Explore our catalog of high-quality products with powerful filtering, sorting, and search features. */}
            Explore our catlog of high-quality products with powerfull
            filtering, sorting, and search features.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition duration-200 text-lg font-medium"
            >
              View products
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md shadow-md transition duration-200 text-lg font-medium"
            >
              Login
            </Link>
          </div>

          <div className="mt-16 flex justify-center items-center  gap-8">
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
              <div className="flex justify-center items-center text-blue-500 border-2 dark:text-blue-400 mb-4">
                <CarTaxiFrontIcon size={50} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Extensive Product Catalog
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse/Search through our collection of products across various
                categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
