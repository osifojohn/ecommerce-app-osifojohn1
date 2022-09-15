import React from "react";

import { BsStarFill } from "react-icons/bs";

const ProductDetails = () => {
  return (
    <section className="detail">
      <figure className="detail__fig">
        <img
          src={"https://dummyjson.com/image/i/products/64/1.jpg"}
          alt=""
          className="detail__img"
        />
      </figure>
      <article className="detail__desc">
        <h3>
          MacBook Pro 2021 with mini-LED display may launch between September,
          November
        </h3>

        <div className="rating">
          <div className="rating__stars">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p className="rating__count">15,153 ratings</p>
        </div>

        <div className="more-info">
          <h3>Available :</h3>
          <p>In stock</p>
          <h3>SKU :</h3>
          <p>2031578887</p>
          <h3>Brand :</h3>
          <p>Laptop</p>
        </div>

        <div className="cart">
          <button>-</button>
          <p>1</p>
          <button>+</button>
          <button className="cart__btn">add to cart</button>
        </div>
      </article>
    </section>
  );
};

export default ProductDetails;
