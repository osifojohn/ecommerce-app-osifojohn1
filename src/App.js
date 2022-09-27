import React from "react";
import "./customstyles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components";
import ScrollToTop from "./utils/helpers";

import {
  Home,
  Error,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
