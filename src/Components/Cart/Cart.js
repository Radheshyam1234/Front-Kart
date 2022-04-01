import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";
import { CartCardItem } from "./CartCardItem";
import { useStateProvider } from "../../Context/StateContext/state-provider";

export const Cart = () => {
  const { userState } = useStateProvider();

  return (
    <div className="cart-page display-flex">
      <div className="cart-items-container">
        {userState?.cartItems?.map((prod) => (
          <CartCardItem prod={prod} />
        ))}
      </div>
      {userState.cartItems.length ? (
        <OrderSummary />
      ) : (
        <div className="text-center">
          <h3>Your cart is empty</h3>
          <Link to="/products">
            <button className="btn primary-btn">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};
