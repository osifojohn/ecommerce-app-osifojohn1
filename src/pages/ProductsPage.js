import React from "react";

import { useProductsContext } from "../contexts/products_context";

import { Hero, SelectBy, LoadingSpinal, ProductsList } from "../components";

const ProductsPage = () => {
  const { products_loading: loading } = useProductsContext();
  if (loading) {
    return (
      <main className="productsPage">
        <Hero />
        <SelectBy />
        <LoadingSpinal />
      </main>
    );
  }
  return (
    <main className="productsPage">
      <Hero />
      <SelectBy />
      <ProductsList />
    </main>
  );
};

export default ProductsPage;
