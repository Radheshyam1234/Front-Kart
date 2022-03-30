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
