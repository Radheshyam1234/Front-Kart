import React from "react";
import { Link } from "react-router-dom";
import { AddToCartBtn } from "../../Components";
import { LikeBtn } from "../../Components";
import { useToast } from "../../Context/ToastContext/ToastProvider";

export const ProductCard = ({ prod }) => {
  const { toastMsg, setToastMsg } = useToast();
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
      <LikeBtn prod={prod} setToastMsg={setToastMsg} />

      <div className="card-details ">
        <div className="card-category text-bold text-medium">
          {prod.category}
        </div>
        <div className="card-description">
          <div className="text-small text-semibold">{prod.name}</div>
        </div>
        <div className="card-price text-medium text-semibold">
          {prod.price}{" "}
          <span className="text-yellow"> ({prod.discount}% Off )</span>
        </div>

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

        <AddToCartBtn prod={prod} setToastMsg={setToastMsg} />
      </div>
    </div>
  );
};
