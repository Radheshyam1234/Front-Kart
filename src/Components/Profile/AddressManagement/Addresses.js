import React, { useState, useEffect } from "react";
import { AddressCard } from "./AddressCard";
import { AddressEditor } from "./AddressEditor";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";
import "../Myprofile.css";

export const Addresses = () => {
  const { addresses } = useAuthProvider();
  const [openAddressEditor, setOpenAddressEditor] = useState(false);
  useEffect(() => {
    console.log(addresses);
  }, []);
  return (
    <div className="address-container-page">
      <button
        className="btn secondary-btn-text-icon"
        onClick={() => {
          setOpenAddressEditor(true);
        }}
      >
        <span className="btn-icon">
          <i className="fas fa-plus"></i>
        </span>
        ADD A NEW ADDRESS
      </button>

      {openAddressEditor && (
        <button
          className="btn primary-btn-outline"
          onClick={() => {
            setOpenAddressEditor(false);
          }}
        >
          Cancel
        </button>
      )}
      <div>
        {" "}
        {openAddressEditor && (
          <AddressEditor setOpenAddressEditor={setOpenAddressEditor} />
        )}
      </div>

      <div className="addressses-container">
        {addresses.length
          ? addresses.map((address) => (
              <AddressCard key={address._id} address={address} />
            ))
          : ""}
      </div>
    </div>
  );
};
