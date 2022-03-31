import { useUserActions } from "../utils/useUserActions";

export const LikeBtn = ({ prod }) => {
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
            removeProductFromWishlist(prod);
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
            addProductInWishlist(prod);
          }}
        >
          <i className="far fa-heart card-favourite-icon"></i>
        </div>
      )}
    </>
  );
};
