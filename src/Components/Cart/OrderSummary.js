import React, { useState } from "react";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { cartPriceCalculator } from "./utilities/cart-price-calculator";

export const OrderSummary = () => {
  const { userState } = useStateProvider();
  return (
    <div className="cart-price-detail display-flex-column box-shadow">
      <h6 className=" secondary-text-color">PRICE DETAILS</h6>
      <hr />
      <div className="row text-semibold">
        <div className="w-70">Price ({userState.cartItems.length} items)</div>
        <div className="w-30">₹ 4999</div>
      </div>

      <div className="row text-semibold">
        <div className="w-70">Discount</div>
        <div className="w-30">-₹ 1999</div>
      </div>

      <div className="row text-semibold">
        <div className="w-70">Delivery Charges</div>
        <div className="w-30">₹ 499</div>
      </div>

      <hr />
      <div className="row text-bold text-large">
        <div className="w-70">TOTAL AMOUNT</div>
        <div className="w-30">₹ {cartPriceCalculator(userState.cartItems)}</div>
      </div>

      <hr />
      {/* <p>You will save ₹ 1999 on this order</p> */}
      <button className="btn primary-btn">Place Order</button>
    </div>
  );
};
