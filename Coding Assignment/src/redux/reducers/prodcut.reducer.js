
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

const initialState = {
  entities: {},
  allIds: [],
  loading: false,
  error: null,
  filter: "all",
  sort: "default",
  search: "",
  currentPage: 1,
  productsPerPage: 10,
  categories: [],
};

const normalizeProducts = (products) => {
  const entities = {};
  const allIds = [];
  const categories = new Set();

  products.forEach((product) => {
    entities[product.id] = product;
    allIds.push(product.id);
    categories.add(product.category);
  });

  return {
    entities,
    allIds,
    categories: Array.from(categories),
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      const normalizedData = normalizeProducts(action.payload);
      return {
        ...state,
        loading: false,
        entities: normalizedData.entities,
        allIds: normalizedData.allIds,
        categories: normalizedData.categories,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_PRODUCT_FILTER:
      return {
        ...state,
        filter: action.payload,
        currentPage: 1,
      };

    case SET_PRODUCT_SORT:
      return {
        ...state,
        sort: action.payload,
        currentPage: 1, 
      };

    case SET_PRODUCT_SEARCH:
      return {
        ...state,
        search: action.payload,
        currentPage: 1, 
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_PRODUCTS_PER_PAGE:
      return {
        ...state,
        productsPerPage: action.payload,
        currentPage: 1, 
      };

    default:
      return state;
  }
};

export default productReducer;
