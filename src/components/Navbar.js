import React from "react";

import {
  FaShoppingCart,
  FaUserPlus,
  FaUserMinus,
  FaBars,
} from "react-icons/fa";

import { useNavigate } from "react-router";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

import { useProductsContext } from "../contexts/products_context";

import { useCartContext } from "../contexts/cart_context";
import { useUserContext } from "../contexts/user_context";

const Navbar = () => {
  const { total_items } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
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
        <button className="logo" type="button" navigate="/">
          MrJohny
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
          {myUser && (
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="nav__checkout"
            >
              Checkout
            </button>
          )}

          <div className="nav__cart-box">
            <button
              className="nav__cart-text"
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>
            <button
              className="nav__cart-icon"
              onClick={() => navigate("/cart")}
              type="button"
            >
              <FaShoppingCart />
            </button>
            <span>{total_items}</span>
          </div>

          {myUser ? (
            <div>
              <button
                type="button"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
                <FaUserMinus />
              </button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={loginWithRedirect}>
                Login
                <FaUserPlus />
              </button>
            </div>
          )}

          {!query ? (
            <button className="nav__hamburger" type="button">
              {isMenuOpen ? (
                <FaTimes onClick={closeMenu} />
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
