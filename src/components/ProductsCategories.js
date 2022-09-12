import React from "react";

import { Link } from "react-router-dom";

import { productsCategories } from "../utils/constants";

import { useProductsContext } from "../contexts/products_context";

const ProductsCategories = () => {
  const { fetchProducts } = useProductsContext();

  return (
    <section className="productsCategories">
      {productsCategories.map((product) => {
        const { id, name, image } = product;
        return (
          <div className="product" key={id} id={id}>
            <Link to="products" className="product__category">
              {" "}
              <h2 onClick={() => fetchProducts(id)}>{name}</h2>
            </Link>

            <figure className="product__fig">
              <Link to="products">
                <img
                  src={image}
                  alt={name}
                  className="product__photo"
                  onClick={() => fetchProducts(id)}
                />
              </Link>
            </figure>
            <Link
              to="products"
              className="product__link"
              onClick={() => fetchProducts(id)}
            >
              Shop now
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsCategories;
