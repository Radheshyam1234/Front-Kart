import axios from "axios";
import React from "react";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";

export const useProfileActions = () => {
  const { setUserProfile } = useAuthProvider();
  const saveProfile = async ({ firstName, lastName, email, setToastMsg }) => {
    {
      try {
        const {
          data: {
            response: { user },
          },
          status,
        } = await axios({
          method: "POST",
          url: `http://localhost:8080/users/editprofile`,
          data: {
            firstName,
            lastName,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (status === 200) {
          setUserProfile(user);
          setToastMsg({
            msg: "Profile Info Updated",
            msgType: "toast-success",
          });
        }
      } catch (error) {
        setToastMsg({
          msg: "Something went Wrong ",
          msgType: "toast-error",
        });
        console.log(error);
      }
    }
  };

  return {
    saveProfile,
  };
};
