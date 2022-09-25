import React from "react";

import { useCartContext } from "../contexts/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount } = useCartContext();
  return (
    <article className="cart-detail">
      <h4 className="cart-detail__total">
        Order Total :<span>{formatPrice(total_amount)}</span>
      </h4>
      <Link className="cart-detail__login" to="/cart">
        Login
      </Link>
    </article>
  );
};

export default CartTotals;
