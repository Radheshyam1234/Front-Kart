import React from "react";
import { useUserActions } from "../utils/useUserActions";
import { useNavigate } from "react-router-dom";

export const AddToCartBtn = ({ prod, setToastMsg }) => {
  const { addProductInCart, isPresentInCart } = useUserActions();
  const navigate = useNavigate();
  return (
    <div>
      {isPresentInCart(prod) ? (
        <button
          className="btn secondary-btn-text-icon"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <span className="btn-icon">
            <i className="fas fa-shopping-cart"></i>
          </span>
          Go to cart
        </button>
      ) : prod.inStock ? (
        <button
          className="btn primary-btn-text-icon "
          onClick={() => {
            addProductInCart({ prod, setToastMsg });
          }}
        >
          <span className="btn-icon">
            <i className="fas fa-shopping-cart"></i>
          </span>
          Add to cart
        </button>
      ) : (
        <button className="btn primary-btn-outline btn-disabled">
          Out of stock
        </button>
      )}
    </div>
  );
};
