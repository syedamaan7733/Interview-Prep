
export const selectAllProducts = (state) => {
  console.log(state);

  return state.products.allIds.map((id) => state.products.entities[id]);
};


export const selectFilteredProducts = (state) => {
  const allProducts = selectAllProducts(state);
  const { filter, sort, search } = state.products;

  // applying filter
  let filteredProducts = allProducts;
  if (filter !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === filter
    );
  }

  // applying search
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
    );
  }

  // APply sorting
  switch (sort) {
    case "price-asc":
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    case "name-asc":
      return [...filteredProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    case "name-desc":
      return [...filteredProducts].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    default:
      return filteredProducts;
  }
};

// For PAgeination
export const selectPaginatedProducts = (state) => {
  const filteredProducts = selectFilteredProducts(state);
  const { currentPage, productsPerPage } = state.products;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return filteredProducts.slice(startIndex, endIndex);
};


export const selectPaginationInfo = (state) => {
  const filteredProducts = selectFilteredProducts(state);
  const { currentPage, productsPerPage } = state.products;

  return {
    currentPage,
    productsPerPage,
    totalProducts: filteredProducts.length,
    totalPages: Math.ceil(filteredProducts.length / productsPerPage),
  };
};

export const selectProductsLoadingState = (state) => ({
  loading: state.products.loading,
  error: state.products.error,
});

// for caegory
export const selectCategories = (state) => state.products.categories;


export const selectAuthState = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

export const selectTheme = (state) => state.theme.theme;
