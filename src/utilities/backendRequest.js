import axios from "axios";

export const getProductsFromDb = async (setProductList) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `http://localhost:8080/products`,
    });
    setProductList(response);
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfileFromDb = async (setUserProfile) => {
  try {
    const {
      data: { response },
      status,
    } = await axios.get(`http://localhost:8080/users/myprofile`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (status === 200) {
      setUserProfile(response.user);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getWishlistFromDb = async (userState, userDispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8080/wishlist`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.status === 200) {
      userDispatch({ type: "SET_WISHLIST", payload: response.data.response });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCartFromDb = async (userState, userDispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:8080/cart`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.status === 200) {
      userDispatch({ type: "SET_CART", payload: response.data.response });
    }
  } catch (error) {
    console.log(error);
  }
};
