import React from "react";

import { PageHero, ProductDetails, RecommededProducts } from "../components";

const SingleProductPage = () => {
  return (
    <main className="singleProductPage ">
      <PageHero />
      <ProductDetails />
      <div className="like">
        <h3>You may also like</h3>
      </div>
      <RecommededProducts />
    </main>
  );
};

export default SingleProductPage;
