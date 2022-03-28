import React from "react";
import { Link } from "react-router-dom";
import { AddToCartBtn } from "../../Components";
import { LikeBtn } from "../../Components";

export const ProductCard = ({ prod }) => {
  return (
    <div className="card-vertical product-card-hover box-shadow">
      <Link to={`/products/${prod._id}`}>
        <div className="card-img">
          <img
            loading="lazy"
            src={prod.image}
            alt="Nature"
            className="img-responsive"
          />
        </div>
      </Link>
      <LikeBtn prod={prod} />

      <div className="card-details ">
        <div className="card-category text-bold text-medium">
          {prod.category}
        </div>
        <div className="card-description">
          <div className="text-small text-semibold">{prod.name}</div>
        </div>
        <div className="card-price text-medium text-semibold">{prod.price}</div>

        <div className="rating-badge ">
          <span className="rating-badge-number">{prod.rating.starRating}</span>
          <span className="rating-badge-star">
            <i className="fas fa-star"></i>
          </span>
          <span className="rating-badge-number">
            <b>|</b>
          </span>
          <span className="rating-badge-number">
            {prod.rating.totalReviews} ratings
          </span>
        </div>

        <AddToCartBtn prod={prod} />
      </div>
    </div>
  );
};
