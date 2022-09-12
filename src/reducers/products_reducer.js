import React from "react";

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

const products_reducer = (state, action) => {
  if (action.type === MENU_OPEN) {
    return { ...state, isMenuOpen: true };
  }
  if (action.type === MENU_CLOSE) {
    return { ...state, isMenuOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    return { ...state, products_loading: false, products: [...action.payload] };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }

  if (action.type === QUERY_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true,
      products_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}' -action type `);
};

export default products_reducer;
