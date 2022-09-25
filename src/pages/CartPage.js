import React from "react";
import { PageNavbar } from "../components";

import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import { CartContent } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <>
        <PageNavbar />
        <main className="cartPage">
          <div className="pageHero">
            <h2 className="pageHero__text">Cart</h2>
          </div>
          <div className="loadingError ">
            <h2>Your cart is empty</h2>
            <Link to="/">Go Shopping</Link>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <PageNavbar />
      <main className="cartPage">
        <div className="pageHero">
          <h2 className="pageHero__text">Cart</h2>
        </div>

        <section className="cart">
          <CartContent />

          {/* <div className="cart__heading">
            <h5>Description</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Remove</h5>
            <h5>Subtotal</h5>
          </div> */}

          {/* <article className="cart__content">
            <figure className="cart__fig">
              <img
                src={"https://dummyjson.com/image/i/products/41/1.jpg"}
                alt=""
                className="cart__photo"
              />
              <h5 className="cart__title">home lighting</h5>
            </figure>
            <p>$1000</p>
            <div className="cart__quantity">
              <button>-</button>
              <h2>1</h2>
              <button>+</button>
            </div>
            <button className="cart__remove">
              <AiOutlineClose />
            </button>
            <h5>$8000</h5>

            <figure className="cart__fig">
              <img
                src={"https://dummyjson.com/image/i/products/98/1.jpg"}
                alt=""
                className="cart__photo"
              />
              <h5 className="cart__title">home lighting</h5>
            </figure>
            <p>$1000</p>
            <div className="cart__quantity">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="cart__remove">
              <AiOutlineClose />
            </button>
            <h5>$8000</h5>
          </article> */}

          {/* <div className="cart-more">
            <button className="cart-more__continue">Continue Shopping</button>
            <button className="cart-more__clear">Clear Shopping Cart</button>
          </div> */}

          {/* <article className="cart-detail">
            <h5 className="cart-detail__subtotal">
              Subtotal :<span>$1000 </span>
            </h5>
            <h4 className="cart-detail__total">
              Order Total :<span>$20000</span>
            </h4>
            <button className="cart-detail__login">Login</button>
          </article> */}
        </section>
      </main>
    </>
  );
};

export default CartPage;
