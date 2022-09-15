import React from "react";
import { Link } from "react-router-dom";

import { useProductsContext } from "../contexts/products_context";

const ListView = () => {
  const { products } = useProductsContext();
  return (
    <main className="listView">
      {products.map(({ title, id, price, images, description }) => {
        return (
          <div className="productList" key={id}>
            <figure className="productList__fig">
              <Link to={`:${id}`}>
                <img src={images[0]} alt={title} className="productList__img" />
              </Link>

              <footer>
                <Link to={`:${id}`}>
                  <h2 className="productList__name">{title}</h2>
                </Link>
                <Link to={`:${id}`}>
                  <p className="productList__price">${price}</p>
                </Link>
              </footer>
            </figure>
            <article className="productList__description">
              <p>{description}</p>
            </article>
          </div>
        );
      })}
    </main>
  );
};

export default ListView;
