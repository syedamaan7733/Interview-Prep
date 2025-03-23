import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_PRODUCT_FILTER,
  SET_PRODUCT_SORT,
  SET_PRODUCT_SEARCH,
  SET_CURRENT_PAGE,
  SET_PRODUCTS_PER_PAGE,
} from "../actionType.redux";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch(fetchProductsSuccess(res.data));
    } catch (error) {
      dispatch(
        fetchProductsFailure(error.message || "Failed to fetch products")
      );
    }
  };
};

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductsRequest());
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       dispatch(fetchProductsSuccess(response.data));
//     } catch (error) {
//       dispatch(
//         fetchProductsFailure(error.message || "Failed to fetch products")
//       );
//     }
//   };
// };


// forfitter, sorting, and searching
export const setProductFilter = (category) => ({
  type: SET_PRODUCT_FILTER,
  payload: category,
});

export const setProductSort = (sort) => ({
  type: SET_PRODUCT_SORT,
  payload: sort,
});

export const setProductSearch = (searchTerm) => ({
  type: SET_PRODUCT_SEARCH,
  payload: searchTerm,
});

// for pagination s,.
export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  payload: pageNumber,
});

export const setProductsPerPage = (count) => ({
  type: SET_PRODUCTS_PER_PAGE,
  payload: count,
});
