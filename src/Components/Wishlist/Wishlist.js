import React from "react";
import { WishlistCardItem } from "./WishlistCardItem";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { useToast } from "../../Context/ToastContext/ToastProvider";

export const Wishlist = () => {
  const { userState } = useStateProvider();
  const { toastMsg, setToastMsg } = useToast();
  return (
    <div>
      <h3 className="text-center">My Wishlist </h3>

      <div className="spacer-3rem"></div>

      <div className="grid-4-column-layout">
        {userState.wishlistItems?.map((prod) => (
          <WishlistCardItem
            prod={prod}
            key={prod.id}
            setToastMsg={setToastMsg}
          />
        ))}
      </div>

      <div className="spacer-3rem"></div>
    </div>
  );
};
