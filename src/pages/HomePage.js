import React from "react";

import {
  Navbar,
  Hero,
  NavMenu,
  ProductsCategories,
  SelectBy,
  ProductsList,
  SearchHero,
} from "../components";

import { LoadingSpinal } from "../components";

import { useProductsContext } from "../contexts/products_context";

import { useFilterContext } from "../contexts/filter_context";

const HomePage = () => {
  const { filtered_products: products } = useFilterContext();
  const {
    query,
    query_products_loading: loading,
    query_products_error: error,
  } = useProductsContext();

  if (loading) {
    return (
      <div className="homePage">
        <Navbar />
        <SearchHero />
        <SelectBy />
        <LoadingSpinal />
      </div>
    );
  }

  if (error) {
    return (
      <div className="homePage">
        <Navbar />
        <SearchHero />
      </div>
    );
  }

  if (query === "") {
    return (
      <div className="homePage">
        <Navbar />
        <Hero />
        <NavMenu />
        <ProductsCategories />
      </div>
    );
  } else {
    return (
      <div className="homePage">
        <Navbar />
        <SearchHero />
        <SelectBy />
        <ProductsList products={products} />
      </div>
    );
  }
};

export default HomePage;
