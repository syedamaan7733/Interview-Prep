import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/products.action";
import {
  selectPaginatedProducts,
  selectProductsLoadingState,
} from "../../redux/selector";

// component
import { ProductCard } from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import { ProductSort } from "./ProductSort";
import { ProductSearch } from "./ProductSearch";
import { Pagination } from "./Pagination";
import { ErrorState, LoadingState } from "../Loading&ErrorState";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectPaginatedProducts);
  const { loading, error } = useSelector(selectProductsLoadingState);
// console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ProductSearch />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ProductFilter />
          <ProductSort />
        </div>
      </div>
{/* new thing i learned today */}
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                No products found.!
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try changingfg your filter or search term
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <Pagination />
        </>
      )}
    </div>
  );
};

export default ProductList;
