import axios from "axios";
import { API_URL } from "../utilities/ApiUrl";
export const getProductsFromDb = async (setProductList) => {
  try {
    const {
      data: { response },
    } = await axios({
      method: "GET",
      url: `${API_URL}/products`,
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
    } = await axios.get(`${API_URL}/users/myprofile`, {
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
      url: `${API_URL}/wishlist`,
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
      url: `${API_URL}/cart`,
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

export const getAddresses = async (setAddresses) => {
  try {
    const { data: response, status } = await axios({
      method: "get",
      url: `${API_URL}/addresses`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (status == 200) {
      setAddresses(response.response);
    }
  } catch (error) {
    console.log(error);
  }
};
