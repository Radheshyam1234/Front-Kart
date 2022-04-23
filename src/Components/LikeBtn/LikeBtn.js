import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProcessingItemLoader } from "../../Loader/Loader";
import { useUserActions } from "../utils/useUserActions";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";

export const LikeBtn = ({ prod, setToastMsg }) => {
  const [processingItem, setProcessingItem] = useState(false);
  const { isUserLoggedIn } = useAuthProvider();
  const navigate = useNavigate();
  const {
    isPresentInWishlist,
    addProductInWishlist,
    removeProductFromWishlist,
  } = useUserActions();

  return (
    <>
      {isPresentInWishlist(prod) ? (
        processingItem ? (
          <div>
            <span className=" card-favourite-icon">
              <ProcessingItemLoader />
            </span>
          </div>
        ) : (
          <div
            onClick={() => {
              removeProductFromWishlist({
                prod,
                setProcessingItem,
                setToastMsg,
              });
            }}
          >
            <i
              style={{ color: "red" }}
              className="fas fa-heart card-favourite-icon"
            ></i>
          </div>
        )
      ) : processingItem ? (
        <div>
          <span className=" card-favourite-icon">
            <ProcessingItemLoader />
          </span>
        </div>
      ) : (
        <div
          onClick={() => {
            isUserLoggedIn
              ? addProductInWishlist({
                  prod,
                  setProcessingItem,
                  setToastMsg,
                })
              : navigate("/login");
          }}
        >
          <i className="far fa-heart card-favourite-icon"></i>
        </div>
      )}
    </>
  );
};
