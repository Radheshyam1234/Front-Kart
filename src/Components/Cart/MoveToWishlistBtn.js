import React from "react";
import { useUserActions } from "../utils/useUserActions";

export const MoveToWishlistBtn = ({ prod, setProcessingItem, setToastMsg }) => {
  const { removeProductFromCart, addProductInWishlist, isPresentInWishlist } =
    useUserActions();
  return (
    <div>
      <button
        className="btn secondary-btn"
        onClick={() => {
          !isPresentInWishlist(prod) &&
            addProductInWishlist({
              prod,
              setProcessingItem,
              setToastMsg,
            });
          removeProductFromCart({
            prod,
            setProcessingItem,
            setToastMsg,
          });
        }}
      >
        Move to wishlist
      </button>
    </div>
  );
};
