import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";
import { useProfileActions } from "./utils/useProfileActions";
import { useToast } from "../../Context/ToastContext/ToastProvider";
import "./Myprofile.css";
export const EditProfile = () => {
  const { userProfile } = useAuthProvider();
  const { saveProfile } = useProfileActions();
  const [firstName, setFirstName] = useState(userProfile.firstName);
  const [lastName, setLastName] = useState(userProfile.lastName);
  const [email, setEmail] = useState(userProfile.email);
  const { toastMsg, setToastMsg } = useToast();
  return (
    <>
      <h6>Profile Details</h6>
      <div className="divider-line"></div>

      <p>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </p>
      <p>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </p>
      <p>
        Email
        <input type="text" value={email} disabled readonly />
      </p>
      <button
        className="btn primary-btn"
        onClick={() => {
          saveProfile({ firstName, lastName, email, setToastMsg });
        }}
      >
        SAVE DETAILS{" "}
      </button>
    </>
  );
};
