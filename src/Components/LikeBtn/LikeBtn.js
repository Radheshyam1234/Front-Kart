import { useUserActions } from "../utils/useUserActions";

export const LikeBtn = ({ prod, setToastMsg }) => {
  const {
    isPresentInWishlist,
    addProductInWishlist,
    removeProductFromWishlist,
  } = useUserActions();

  return (
    <>
      {isPresentInWishlist(prod) ? (
        <div
          onClick={() => {
            removeProductFromWishlist({ prod, setToastMsg });
          }}
        >
          <i
            style={{ color: "red" }}
            className="fas fa-heart card-favourite-icon"
          ></i>
        </div>
      ) : (
        <div
          onClick={() => {
            addProductInWishlist({ prod, setToastMsg });
          }}
        >
          <i className="far fa-heart card-favourite-icon"></i>
        </div>
      )}
    </>
  );
};
