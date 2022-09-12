import React from "react";

import { productsCategoriesNames } from "../utils/constants";

import { useProductsContext } from "../contexts/products_context";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useProductsContext();

  if (isMenuOpen) {
    return (
      <nav className="navbar">
        <h3 className="heading-3">Home</h3>
        <ul className="nav-menu">
          {productsCategoriesNames.map((category) => {
            return (
              <li className="nav-menu__item" key={category.id}>
                <a
                  href={category.url}
                  className="nav-menu__link"
                  onClick={closeMenu}
                >
                  {category.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
  return null;
};

export default NavMenu;
