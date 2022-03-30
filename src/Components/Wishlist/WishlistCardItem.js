import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";
import { LikeBtn } from "../LikeBtn/LikeBtn";

export const WishlistCardItem = ({ prod }) => {
  const { userState } = useStateProvider();
  return (
    <div class="card-vertical product-card-hover box-shadow">
      <Link to={`/products/${prod._id}`}>
        <div class="card-img">
          <img
            loading="lazy"
            src={prod.image}
            alt="product"
            class="img-responsive"
          />
        </div>
      </Link>
      <LikeBtn prod={prod} userState={userState} />

      <div class="card-details">
        <div class="card-category text-bold text-medium">Mobile</div>
        <div class="card-description">
          <div class="text-small text-semibold">{prod.name}</div>
        </div>
        <div class="card-price text-medium text-semibold">{prod.price}</div>
        <AddToCartBtn prod={prod} />
      </div>
    </div>
  );
};
