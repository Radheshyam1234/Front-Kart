import axios from "axios";
import React, { useState } from "react";

import { API_URL } from "../../../utilities/ApiUrl";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";
import { useToast } from "../../../Context/ToastContext/ToastProvider";
import "../Myprofile.css";

export const AddressEditor = ({ setOpenAddressEditor }) => {
  const { addresses, setAddresses } = useAuthProvider();
  const [addressData, setAddressData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    mobileNumber: "",
  });
  const { setToastMsg } = useToast();
  const [errorMsg, setErrorMsg] = useState({});

  const handleSubmit = async () => {
    let error = {};
    let validation = true;

    const validate = () => {
      Object.keys(addressData).map((key) => {
        if (addressData[key] == "") {
          validation = false;
          error = { ...error, [key]: `Please fill ${key} field` };
        }
      });

      if (!/^[6-9]\d{9}$/gi.test(addressData.mobileNumber)) {
        error = {
          ...error,
          mobileNumber: "Please Enter a valid mobile Number",
        };
        validation = false;
      }

      if (!/^[1-9][0-9]{5}$/gi.test(addressData.pinCode)) {
        error = { ...error, pinCode: "Please Enter a valid pinCode" };
        validation = false;
      }

      setErrorMsg(error);
    };

    try {
      validate();

      if (!validation) return;

      const { data: response, status } = await axios({
        method: "post",
        url: `${API_URL}/addresses`,
        data: addressData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (status == 200) {
        setAddresses(response.response);
        setToastMsg({
          msg: "Address added successfully",
          msgType: "toast-success",
        });
        setOpenAddressEditor(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="address-editor-container">
      <div className="address-editor">
        <label className="form-label form-label-required-field">Name</label>
        <input
          type="text"
          className="form-field"
          onChange={(e) => {
            setAddressData({ ...addressData, name: e.target.value });
          }}
        />
        <p className="text-small error-msg">{errorMsg.name}</p>

        <label className="form-label form-label-required-field">Street</label>
        <input
          type="text"
          className="form-field"
          onChange={(e) => {
            setAddressData({ ...addressData, street: e.target.value });
          }}
        />
        <p className="text-small error-msg ">{errorMsg.street}</p>

        <label className="form-label form-label-required-field">City</label>
        <input
          type="text"
          className="form-field"
          onChange={(e) => {
            setAddressData({ ...addressData, city: e.target.value });
          }}
        />
        <p className="text-small error-msg">{errorMsg.city}</p>

        <label className="form-label form-label-required-field">State</label>
        <input
          type="text"
          className="form-field"
          onChange={(e) => {
            setAddressData({ ...addressData, state: e.target.value });
          }}
        />
        <p className="text-small error-msg">{errorMsg.state}</p>

        <label className="form-label form-label-required-field">Country</label>
        <input
          type="text"
          className="form-field"
          onChange={(e) => {
            setAddressData({ ...addressData, country: e.target.value });
          }}
        />
        <p className="text-small error-msg">{errorMsg.country}</p>

        <label className="form-label form-label-required-field">Pin Code</label>
        <input
          type="number"
          pattern="[1-9][0-9]{5}"
          value={addressData.pinCode}
          className="form-field"
          onChange={(e) => {
            setAddressData({
              ...addressData,
              pinCode: e.target.value.slice(0, 6),
            });
          }}
        />
        <p className="text-small error-msg">{errorMsg.pinCode}</p>

        <label className="form-label form-label-required-field">
          Mobile Number
        </label>
        <input
          type="number"
          className="form-field"
          value={addressData.mobileNumber}
          onChange={(e) => {
            setAddressData({
              ...addressData,
              mobileNumber: e.target.value.slice(0, 10),
            });
          }}
        />
        <p className="text-small error-msg">{errorMsg.mobileNumber}</p>

        <button className="btn primary-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
