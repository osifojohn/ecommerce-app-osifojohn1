import React from "react";
import "./customstyles/main.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components";

import { Home, Error, Cart, Products, SingleProduct, Checkout } from "./pages";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
