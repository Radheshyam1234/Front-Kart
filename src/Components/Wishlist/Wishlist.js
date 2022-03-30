import React from "react";
import { WishlistCardItem } from "./WishlistCardItem";
import { useStateProvider } from "../../Context/StateContext/state-provider";

export const Wishlist = () => {
  const { userState } = useStateProvider();
  return (
    <div>
      <h3 className="text-center">My Wishlist </h3>

      <div className="spacer-3rem"></div>

      <div className="grid-4-column-layout">
        {userState.wishlistItems?.map((prod) => {
          return <WishlistCardItem prod={prod} key={prod.id} />;
        })}
      </div>

      <div className="spacer-3rem"></div>
    </div>
  );
};
