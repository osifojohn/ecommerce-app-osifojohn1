import React from "react";

import { Link } from "react-router-dom";
import { LoadingSpinal } from "../components";
import LoadingErrorMsg from "../components/LoadingErrorMsg";

import { SelectBy, ProductsList, PageNavbar } from "../components";

import { useProductsContext } from "../contexts/products_context";

import { useFilterContext } from "../contexts/filter_context";

const ProductsPage = () => {
  const { products_loading: loading, products_error: error } =
    useProductsContext();
  const { filtered_products: products } = useFilterContext();

  if (loading) {
    return (
      <>
        <PageNavbar />
        <main className="productsPage">
          <div className="pageHero"></div>
          <LoadingSpinal />
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        {" "}
        <PageNavbar />
        <main className="productsPage">
          <div className="pageHero"></div>
          <LoadingErrorMsg />
        </main>
      </>
    );
  }

  const title = products.slice(-1).map(({ category }) => category);

  return (
    <>
      <PageNavbar />
      <main className="productsPage">
        <div className="pageHero">
          <h2 className="pageHero__text">
            <Link to="/">Home</Link> /{title}
          </h2>
        </div>
        <SelectBy />
        <ProductsList products={products} />
      </main>
    </>
  );
};

export default ProductsPage;