import React, { useState } from "react";
import { useUserActions } from "../utils";
import { useStateProvider } from "../../Context/StateContext/state-provider";

export const AddTWishlistBtn = ({ prod }) => {
  const [processingItem, setProcessingItem] = useState(false);
  const { userDispatch } = useStateProvider();
  const {
    isPresentInWishlist,
    addProductInWishlist,
    removeProductFromWishlist,
  } = useUserActions();
  return isPresentInWishlist(prod) ? (
    <button
      className={`btn  primary-btn-outline ${
        processingItem ? "btn-disabled" : ""
      }`}
      onClick={() => {
        removeProductFromWishlist({ prod, setProcessingItem });
      }}
    >
      <span class="btn-icon">
        <i className="fas fa-heart"></i>
      </span>
      <span className="ml-1">Remove</span>
    </button>
  ) : (
    <button
      className={`btn  primary-btn-outline ${
        processingItem ? "btn-disabled" : ""
      }`}
      onClick={() => {
        addProductInWishlist({ prod, setProcessingItem });
      }}
    >
      <span class="btn-icon">
        <i className="far fa-heart"></i>
      </span>
      <span className="ml-1">Add to wishlist</span>
    </button>
  );
};
