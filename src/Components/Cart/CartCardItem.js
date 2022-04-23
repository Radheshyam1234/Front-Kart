import React, { useState } from "react";
import { useUserActions } from "./../utils";
import { MoveToWishlistBtn } from "./MoveToWishlistBtn";

export const CartCardItem = ({ prod, setToastMsg }) => {
  const [processingItem, setProcessingItem] = useState(false);
  const { updateQuantity, removeProductFromCart } = useUserActions();
  return (
    <div className="card-horizontal cart-item box-shadow">
      <div className="card-img">
        <img
          loading="lazy"
          src={prod.product?.image}
          alt={prod.product?.name}
          className="img-responsive"
        />
      </div>

      <div className="card-details">
        <div className="card-description">
          <p className="text-medium text-semibold">{prod.product?.name}</p>
          <div className="card-price">{prod.product?.price}</div>
        </div>

        <div className="display-flex mt-1">
          <button
            className="border-1px-circle-btn"
            disabled={prod.quantity == 1 ? true : false}
            onClick={() =>
              updateQuantity({ prod, increase: false, setToastMsg })
            }
          >
            <i className="fas fa-minus"></i>
          </button>
          <div className="border-1px-square cart-qty text-center text-bold font-large">
            {prod.quantity}
          </div>
          <button
            className="border-1px-circle-btn "
            onClick={() =>
              updateQuantity({
                prod,
                increase: true,
                setToastMsg,
              })
            }
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>

        <div className="row">
          <MoveToWishlistBtn
            prod={prod.product}
            setProcessingItem={setProcessingItem}
            setToastMsg={setToastMsg}
          />
          <button
            className={`btn primary-btn-text-icon ${
              processingItem ? "btn-disabled" : ""
            }`}
            onClick={() => {
              removeProductFromCart({
                prod: prod.product,
                setProcessingItem,
                setToastMsg,
              });
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
