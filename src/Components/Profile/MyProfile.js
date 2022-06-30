import React from "react";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";
import "./Myprofile.css";
export const MyProfile = () => {
  const { userProfile } = useAuthProvider();

  return (
    <>
      <h6>Profile Details</h6>
      <div className="divider-line"></div>

      <p>
        First Name
        <span className="secondary-text-color ml-1">
          {userProfile.firstName}
        </span>
      </p>
      <p>
        Last Name
        <span className="secondary-text-color ml-1">
          {userProfile.lastName}
        </span>
      </p>
      <p>
        Email
        <span className="secondary-text-color ml-1">{userProfile.email}</span>
      </p>
      <Link to="/myprofile/edit">
        <button className="btn primary-btn">Edit </button>
      </Link>
    </>
  );
};
