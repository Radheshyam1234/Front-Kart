import { useStateProvider } from "../../Context/StateContext/state-provider";
import axios from "axios";

export const useUserActions = () => {
  const { userState, userDispatch } = useStateProvider();

  const isPresentInWishlist = (prod) =>
    userState?.wishlistItems?.find((item) => item._id == prod._id);

  const isPresentInCart = (prod) =>
    userState.cartItems.find((item) => item.product._id == prod._id);

  const addProductInWishlist = async (prod) => {
    const addProductToWishlist = async (product) => {
      try {
        const response = await axios({
          method: "POST",
          url: `http://localhost:8080/wishlist`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({
            type: "SET_WISHLIST",
            payload: response.data.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    await addProductToWishlist(prod);
  };

  const removeProductFromWishlist = async (prod) => {
    const removeProductFromWishlist = async (product) => {
      try {
        const response = await axios({
          method: "DELETE",
          url: `http://localhost:8080/wishlist`,
          data: {
            product,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.status === 200) {
          userDispatch({
            type: "SET_WISHLIST",
            payload: response.data.response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    await removeProductFromWishlist(prod);
  };

  return {
    addProductInWishlist,
    removeProductFromWishlist,
    isPresentInWishlist,
  };
};
