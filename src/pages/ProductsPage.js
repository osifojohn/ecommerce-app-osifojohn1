import React from "react";

import { useProductsContext } from "../contexts/products_context";

import { Hero, SelectBy, LoadingSpinal, ProductsList } from "../components";

const ProductsPage = () => {
  const { products_loading: loading } = useProductsContext();
  if (loading) {
    return (
      <>
        <Hero />
        <SelectBy />
        <LoadingSpinal />
      </>
    );
  }
  return (
    <>
      <Hero />
      <SelectBy />
      <ProductsList />
    </>
  );
};

export default ProductsPage;
