import React from "react";
import { FaShoppingCart, FaUserPlus, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { useProductsContext } from "../contexts/products_context";

const Navbar = () => {
  const { isMenuOpen, closeMenu, openMenu, queryProducts, query } =
    useProductsContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") return;
  };

  return (
    <>
      <header className="header" onSubmit={handleSubmit}>
        <button className="logo">MrJohny</button>

        <form className="search">
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
            <span>0</span>
          </div>

          <div>
            <button>Login</button>
            <button>
              <FaUserPlus />
            </button>
          </div>

          <button className="nav__hamburger">
            {isMenuOpen ? (
              <AiOutlineClose onClick={closeMenu} />
            ) : (
              <FaBars onClick={openMenu} />
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
