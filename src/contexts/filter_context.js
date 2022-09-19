import React, { useEffect, useContext, useReducer } from "react";

import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";
import {
  LOAD_PRODUCTS,
  LOAD_QUERY_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
} from "../actions";

const FilterContext = React.createContext();

const initialState = {
  filtered_products: [],
  products: [],
  grid_view: true,
  sort: "price-lowest",
};

export const FilterProvider = ({ children }) => {
  const { products, query_products, query } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const gridView = () => {
    dispatch({ type: GRID_VIEW });
  };
  const listView = () => {
    dispatch({ type: LIST_VIEW });
  };

  useEffect(() => {
    if (query_products.length !== 0 && query.length !== 0) {
      dispatch({ type: LOAD_QUERY_PRODUCTS, payload: query_products });
    }
  }, [query_products, query]);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const upDateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, gridView, listView, upDateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
