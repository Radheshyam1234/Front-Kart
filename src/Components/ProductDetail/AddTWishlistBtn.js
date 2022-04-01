import React from "react";
import { useUserActions } from "../utils";
import { useStateProvider } from "../../Context/StateContext/state-provider";

export const AddTWishlistBtn = ({ prod }) => {
  const { userDispatch } = useStateProvider();
  const {
    isPresentInWishlist,
    addProductInWishlist,
    removeProductFromWishlist,
  } = useUserActions();
  return isPresentInWishlist(prod) ? (
    <button
      class="btn   primary-btn-outline "
      onClick={() => {
        removeProductFromWishlist(prod);
      }}
    >
      <span class="btn-icon">
        <i className="fas fa-heart"></i>
      </span>
      <span className="ml-1">Remove</span>
    </button>
  ) : (
    <button
      class="btn   primary-btn-outline "
      onClick={() => {
        addProductInWishlist(prod);
      }}
    >
      <span class="btn-icon">
        <i className="far fa-heart"></i>
      </span>
      <span className="ml-1">Add to wishlist</span>
    </button>
  );
};
