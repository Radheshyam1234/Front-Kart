import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";

import "./Myprofile.css";
export const ProfilePage = () => {
  const links = [
    {
      text: "Profile",
      link: "/myprofile",
    },
    {
      text: "Orders",
      link: "/myprofile/orders",
    },
    {
      text: "Addresses",
      link: "/myprofile/addresses",
    },
    // {
    //   text: "Settings",
    //   link: "/myprofile/settings",
    // },
  ];
  const { logoutUser } = useAuthProvider();
  return (
    <div className="myProfile display-flex justify-center">
      <div className="w-30  mobile-hide">
        {links.map(({ text, link }) => {
          return (
            <div key={text}>
              <NavLink
                to={link}
                end
                className={({ isActive }) =>
                  isActive ? "text-primary text-semibold" : ""
                }
              >
                <div className="profile-page-links">{text}</div>
              </NavLink>
            </div>
          );
        })}
        <div className="profile-page-links">
          <button className="btn primary-btn-text-icon " onClick={logoutUser}>
            <span className="btn-icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            Logout
          </button>
        </div>
      </div>
      <div className="Profile-details display-flex w-70">
        <Outlet />
      </div>
    </div>
  );
};
