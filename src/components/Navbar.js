import React from "react";

import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { useProductsContext } from "../contexts/products_context";

import { useNavigate } from "react-router-dom";
import { useCartContext } from "../contexts/cart_context";

const Navbar = () => {
  const { total_items } = useCartContext();
  const navigate = useNavigate();

  const { isMenuOpen, closeMenu, openMenu, queryProducts, query } =
    useProductsContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") return;
  };

  return (
    <>
      <header className="header home">
        <button className="logo" onClick={() => navigate("/")}>
          <h1>MrJohny</h1>
        </button>

        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={queryProducts}
            className="search__input"
            placeholder="Search by name e.g shirt"
          />
          <button className="search__btn" type="submit">
            <BsSearch />
          </button>
        </form>

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

          {!query ? (
            <button className="nav__hamburger">
              {isMenuOpen ? (
                <AiOutlineClose onClick={closeMenu} />
              ) : (
                <FaBars onClick={openMenu} />
              )}
            </button>
          ) : null}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
