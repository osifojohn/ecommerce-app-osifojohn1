import React from "react";
import { Link } from "react-router-dom";
const ListView = () => {
  return (
    <main className="listView">
      <div className="productList">
        <figure className="productList__fig">
          <Link to={`products/:${1}`}>
            <img
              src={"https://dummyjson.com/image/i/products/2/2.jpg"}
              alt=""
              className="productList__img"
            />
          </Link>

          <footer>
            <Link to={`products/:${1}`}>
              <h2 className="productList__name">Furniture</h2>
            </Link>
            <Link to={`products/:${1}`}>
              <p className="productList__price">$2000</p>
            </Link>
          </footer>
        </figure>
        <article className="productList__description">
          <p>
            Huawei’s re-badged P30 Pro New Edition was officially unveiled
            yesterday in Germany and now the device has made its way to the UK.
          </p>
        </article>
      </div>

      <div className="productList">
        <figure className="productList__fig">
          <Link to={`products/:${1}`}>
            <img
              src={"https://dummyjson.com/image/i/products/98/1.jpg"}
              alt=""
              className="productList__img"
            />
          </Link>

          <footer>
            <Link to={`products/:${1}`}>
              <h2 className="productList__name">Furniture</h2>
            </Link>
            <Link to={`products/:${1}`}>
              <p className="productList__price">$2000</p>
            </Link>
          </footer>
        </figure>
        <article className="productList__description">
          <p>
            Huawei’s re-badged P30 Pro New Edition was officially unveiled
            yesterday in Germany and now the device has made its way to the UK.
          </p>
        </article>
      </div>

      <div className="productList">
        <figure className="productList__fig">
          <Link to={`products/:${1}`}>
            <img
              src={"https://dummyjson.com/image/i/products/2/2.jpg"}
              alt=""
              className="productList__img"
            />
          </Link>

          <footer>
            <Link to={`products/:${1}`}>
              <h2 className="productList__name">Furniture</h2>
            </Link>
            <Link to={`products/:${1}`}>
              <p className="productList__price">$2000</p>
            </Link>
          </footer>
        </figure>
        <article className="productList__description">
          <p>
            Huawei’s re-badged P30 Pro New Edition was officially unveiled
            yesterday in Germany and now the device has made its way to the UK.
          </p>
        </article>
      </div>
    </main>
  );
};

export default ListView;
