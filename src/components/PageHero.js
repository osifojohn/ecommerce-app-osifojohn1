import React from "react";

import { Link } from "react-router-dom";

const PageHero = ({ type, data }) => {
  return (
    <div className="pageHero">
      <h2 className="pageHero__text">
        <Link to="/products">Products</Link> / Samsung Galaxy Book
      </h2>
    </div>
  );
};

export default PageHero;
