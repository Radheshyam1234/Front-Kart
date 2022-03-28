import React from "react";

export const AddToCartBtn = ({ prod }) => {
  return (
    <div>
      <button className="btn primary-btn-text-icon ">
        <span className="btn-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        Add to cart
      </button>
    </div>
  );
};
