import React from "react";
import axios from "axios";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";
import { useToast } from "../../../Context/ToastContext/ToastProvider";
import "../Myprofile.css";

export const AddressCard = ({ address }) => {
  const { setAddresses } = useAuthProvider();
  const { setToastMsg } = useToast();

  const deleteAddressHandler = async () => {
    try {
      const { data: response, status } = await axios({
        method: "delete",
        url: `http://localhost:8080/addresses/${address._id}`,

        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (status == 200) {
        setAddresses(response.response);
        setToastMsg({
          msg: "Address removed successfully",
          msgType: "toast-success",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="address-box">
      <p className="text-bold secondary-text-color">
        <span>{address.name}</span>
        <span> {address.mobileNumber}</span>
      </p>
      <p>
        {address.street} {address.city} {address.state} {address.country}{" "}
        <b>{address.pinCode}</b>
      </p>

      <button className="btn primary-btn">Edit</button>
      <button
        className="btn secondary-btn-outline"
        onClick={deleteAddressHandler}
      >
        Delete
      </button>
    </div>
  );
};
