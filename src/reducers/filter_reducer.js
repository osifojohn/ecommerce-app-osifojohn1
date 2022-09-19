import {
  LOAD_PRODUCTS,
  LOAD_QUERY_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_QUERY_PRODUCTS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      products: [...action.payload],
    };
  }

  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      products: [...action.payload],
    };
  }

  if (action.type === GRID_VIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }

  if (action.type === LIST_VIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { filtered_products, sort } = state;

    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (sort === "price-highest") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No Matching "${action.type}' -action type `);
};

export default filter_reducer;
