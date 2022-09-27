import React from "react";
import { PageNavbar } from "../components";

const CheckoutPage = () => {
  return (
    <>
      <PageNavbar />
      <main className="checkoutPage">
        <div className="pageHero">
          <h2 className="pageHero__text">Checkout</h2>
        </div>
        <section className="checkout">Checkout</section>
      </main>
    </>
  );
};

export default CheckoutPage;
