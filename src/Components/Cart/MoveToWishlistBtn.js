import React from "react";
import { useUserActions } from "../utils/useUserActions";

export const MoveToWishlistBtn = ({ prod, setToastMsg }) => {
  const { removeProductFromCart, addProductInWishlist, isPresentInWishlist } =
    useUserActions();
  return (
    <div>
      <button
        className="btn secondary-btn"
        onClick={() => {
          !isPresentInWishlist(prod) &&
            addProductInWishlist({ prod, setToastMsg });
          removeProductFromCart({ prod, setToastMsg });
        }}
      >
        Move to wishlist
      </button>
    </div>
  );
};
