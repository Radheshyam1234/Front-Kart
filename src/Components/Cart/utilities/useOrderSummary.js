import React from "react";
import { useStateProvider } from "../../../Context/StateContext/state-provider";
import { cartPriceCalculator } from "./cart-price-calculator";

export const useOrderSummary = () => {
  const { userState } = useStateProvider();
  const cartDetails = cartPriceCalculator(userState.cartItems);
  const deliveryCharges =
    cartDetails.totalPrice - cartDetails.discount > 10000 ? 0 : 40;
  const payableAmount =
    cartDetails.totalPrice - cartDetails.discount + deliveryCharges;
  return {
    totalPrice: cartDetails.totalPrice.toFixed(2),
    discount: cartDetails.discount.toFixed(2),
    deliveryCharges,
    payableAmount,
  };
};
