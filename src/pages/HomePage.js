import React from "react";

import { Hero, NavMenu, ProductsCategories } from "../components";

const HomePage = () => {
  return (
    <main className="homePage">
      <Hero />
      <NavMenu />
      <ProductsCategories />
    </main>
  );
};

export default HomePage;
