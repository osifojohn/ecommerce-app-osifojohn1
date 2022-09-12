import React, { useContext, useEffect, useReducer } from "react";

import axios from "axios";

import reducer from "../reducers/products_reducer";
import {
  MENU_OPEN,
  MENU_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  QUERY_PRODUCTS_BEGIN,
  QUERY_PRODUCTS_SUCCESS,
  QUERY_PRODUCTS_ERROR,
} from "../actions";

import { API_ENDPOINT } from "../utils/constants";

const initialState = {
  isMenuOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  query: "",
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMenu = () => {
    dispatch({ type: MENU_OPEN });
  };

  const closeMenu = () => {
    dispatch({ type: MENU_CLOSE });
  };

  const fetchProducts = async (name) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(
        `${API_ENDPOINT}products/category/${name}`
      );
      const products = response.data.products;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const queryProducts = async (name) => {
    dispatch({ type: QUERY_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(
        `${API_ENDPOINT}products/search?q=${name}`
      );
      const products = response.data.products;
      // dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      console.log(products);
    } catch (error) {
      // dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openMenu, closeMenu, fetchProducts, queryProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
