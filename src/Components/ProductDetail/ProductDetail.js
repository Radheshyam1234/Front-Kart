import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductInfo } from "./getProductInfoFromDb";
import { AddToCartBtn } from "../AddToCartBtn/AddToCartBtn";

import "./ProductDetail.css";
import { AddTWishlistBtn } from "./AddTWishlistBtn";

export const ProductDetail = () => {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(async () => {
    const data = await getProductInfo(id);
    setProduct(data);
  }, []);

  return (
    <div className="  ">
      {product ? (
        <div class="grid-50-50-layout product-detail-card box-shadow">
          <div class="card-img">
            <img
              loading="lazy"
              src={product.image}
              alt="Nature"
              class="img-responsive"
            />
          </div>

          <div class="card-details">
            <div class="card-title text-bold text-large secondary-text-color">
              {product.brand}
            </div>

            <div class="card-category text-bold">{product.category}</div>

            <div class="card-description">
              <div class="text-small">
                <p>{product.name}</p>
              </div>
            </div>
            <div className="card-description">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <i
                    className="fas fa-star rating-star-icon"
                    style={{
                      color: item <= product.rating.starRating ? "#d80230" : "",
                    }}
                  ></i>
                );
              })}
              <span className="ml-1">
                <b> (Out of {product.rating.totalReviews} ratings)</b>
              </span>
            </div>

            <div class=" text-large text-semibold mt-1">
              Rs. {(product.price * (100 - product.discount)) / 100}
              {product.discount > 0 && (
                <>
                  <span className="text-strike-through secondary-text-color ml-1">
                    Rs.
                    {product.price}
                  </span>
                  <span className="text-yellow ml-1">
                    ({product.discount}% Off)
                  </span>
                </>
              )}
            </div>
            <p className="vatInfo"> inclusive of all taxes</p>
            <div className="divider-line"></div>
            <ul className="list-style-none secondary-text-color text-semibold">
              <li>
                {product.inStock ? (
                  <div>
                    <i
                      className="far fa-calendar-check feature-icon primary-text-color"
                      primary-text-color
                    ></i>
                    <span className="ml-1">Currently in Stock </span>
                  </div>
                ) : (
                  <div>
                    <i className="far fa-calendar-times feature-icon primary-text-color"></i>
                    <span className="ml-1 ">Currently unavailable</span>
                  </div>
                )}
              </li>
              <li>
                {product.fastDelivery && (
                  <div>
                    <i className="fas fa-truck flip-image feature-icon primary-text-color"></i>
                    <span className="ml-1">Fast delivery available</span>
                  </div>
                )}
              </li>
            </ul>

            <div class="row">
              <AddToCartBtn prod={product} />
              <AddTWishlistBtn prod={product} />
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </div>
  );
};
