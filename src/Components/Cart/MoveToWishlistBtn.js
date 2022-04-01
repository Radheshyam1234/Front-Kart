import React from "react";
import { useUserActions } from "../utils/useUserActions";

export const MoveToWishlistBtn = ({ prod }) => {
  const { removeProductFromCart, addProductInWishlist, isPresentInWishlist } =
    useUserActions();
  return (
    <div>
      <button
        className="btn secondary-btn"
        onClick={() => {
          !isPresentInWishlist(prod) && addProductInWishlist(prod);
          removeProductFromCart(prod);
        }}
      >
        Move to wishlist
      </button>
    </div>
  );
};
