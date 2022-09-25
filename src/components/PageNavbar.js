import React from "react";

import { FaShoppingCart, FaUserPlus } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/cart_context";

const PageNavbar = () => {
  const { total_items } = useCartContext();
  const navigate = useNavigate();

  return (
    <>
      <header className="header pages">
        <button className="logo" onClick={() => navigate("/")}>
          <h1>MrJohny</h1>
        </button>

        <nav className="nav">
          <button>Checkout</button>

          <div className="nav__cart-box">
            <button className="nav__cart-text">Cart</button>
            <button className="nav__cart-icon">
              <FaShoppingCart />
            </button>
            <span>{total_items}</span>
          </div>

          <div>
            <button>Login</button>
            <button>
              <FaUserPlus />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default PageNavbar;
