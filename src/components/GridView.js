import React from "react";

import { Link } from "react-router-dom";

const GridView = () => {
  return (
    <main className="gridView">
      <div className="product">
        <figure className="product__fig">
          <Link to="singleproduct">
            <img
              src={"https://dummyjson.com/image/i/products/2/2.jpg"}
              alt={"1"}
              className="product__photo"
            />
          </Link>
        </figure>
        <footer className="product__description">
          <Link to={`products/:${1}`}>
            {" "}
            <h3 className="product__name">Nasdfghkjjj</h3>
          </Link>
          <Link to={`products/:${1}`}>
            <p className="product__price">$10000</p>
          </Link>
        </footer>
      </div>

      <div className="product">
        <figure className="product__fig">
          <Link to="singleproduct">
            <img
              src="https://dummyjson.com/image/i/products/41/1.jpg"
              alt={"1"}
              className="product__photo"
            />
          </Link>
        </figure>
        <footer className="product__description">
          <Link to={`products/:${1}`}>
            {" "}
            <h3 className="product__name">Nasdfghkjjj</h3>
          </Link>
          <Link to={`products/:${1}`}>
            <p className="product__price">10000</p>
          </Link>
        </footer>
      </div>

      <div className="product">
        <figure className="product__fig">
          <Link to="singleproduct">
            <img
              src={"https://dummyjson.com/image/i/products/2/2.jpg"}
              alt={"1"}
              className="product__photo"
            />
          </Link>
        </figure>
        <footer className="product__description">
          <Link to={`products/:${1}`}>
            {" "}
            <h3 className="product__name">Nasdfghkjjj</h3>
          </Link>
          <Link to={`products/:${1}`}>
            <p className="product__price">10000</p>
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default GridView;
