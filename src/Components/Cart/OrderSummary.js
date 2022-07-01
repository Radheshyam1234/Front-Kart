import React, { useState } from "react";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { useOrderSummary } from "./utilities/useOrderSummary";

export const OrderSummary = () => {
  const { userState } = useStateProvider();
  const { totalPrice, discount, deliveryCharges, payableAmount } =
    useOrderSummary();
  return (
    <div className="cart-price-detail display-flex-column box-shadow">
      <h6 className=" secondary-text-color">PRICE DETAILS</h6>
      <hr />
      <div className="row text-semibold">
        <div className="w-70">Price ({userState.cartItems.length} items)</div>
        <div className="w-30">₹ {totalPrice}</div>
      </div>

      <div className="row text-semibold">
        <div className="w-70">Discount</div>
        <div className="w-30 text-success">-₹ {discount}</div>
      </div>

      <div className="row text-semibold">
        <div className="w-70">Delivery Charges</div>
        <div className="w-30">
          {deliveryCharges > 0 ? (
            <span>₹ {deliveryCharges}</span>
          ) : (
            <>
              <span className="text-strike-through text-success">₹ 40</span>{" "}
              Free
            </>
          )}
        </div>
      </div>

      <hr />
      <div className="row text-bold text-large">
        <div className="w-70">TOTAL AMOUNT</div>
        <div className="w-30">₹ {payableAmount}</div>
      </div>

      <hr />
      {/* <p>You will save ₹ 1999 on this order</p> */}
      <button className="btn primary-btn">Place Order</button>
    </div>
  );
};
