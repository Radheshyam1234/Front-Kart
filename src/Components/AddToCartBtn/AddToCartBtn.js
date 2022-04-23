import React, { useState } from "react";
import { useUserActions } from "../utils/useUserActions";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

export const AddToCartBtn = ({ prod, setToastMsg }) => {
  const [processingItem, setProcessingItem] = useState(false);
  const { isUserLoggedIn } = useAuthProvider();
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
          className={`btn primary-btn-text-icon ${
            processingItem ? "btn-disabled" : ""
          }`}
          onClick={() => {
            isUserLoggedIn
              ? addProductInCart({
                  prod,
                  setProcessingItem,
                  setToastMsg,
                })
              : navigate("/login");
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
