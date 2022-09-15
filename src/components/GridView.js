import React from "react";

import { Link } from "react-router-dom";

import { useProductsContext } from "../contexts/products_context";

const GridView = () => {
  const { products, fetchSingleProduct, fetchRecommendedProducts } =
    useProductsContext();

  const handleClick = (id, category) => {
    fetchSingleProduct(id);
    fetchRecommendedProducts(id, category);
  };

  return (
    <section className="gridView">
      {products.map(({ title, id, price, images, category: c }) => {
        return (
          <div className="product" key={id}>
            <figure className="product__fig">
              <Link to={`:${id}`} onClick={() => handleClick(id, c)}>
                <img src={images[0]} alt={title} className="product__photo" />
              </Link>
            </figure>
            <footer className="product__description">
              <Link to={`:${id}`} onClick={() => handleClick(id, c)}>
                {" "}
                <h3 className="product__name">{title}</h3>
              </Link>
              <Link to={`:${id}`} onClick={() => handleClick(id, c)}>
                <p className="product__price">${price}</p>
              </Link>
            </footer>
          </div>
        );
      })}
    </section>
  );
};

export default GridView;
