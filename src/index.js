import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";

import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
