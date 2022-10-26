import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { SearchBox } from "./SearchBox";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";
import { truncateString } from "../../utilities/turncateString";
import "./Navbar.css";

export const Navbar = () => {
  const { userState } = useStateProvider();
  const { isUserLoggedIn, userProfile, logoutUser } = useAuthProvider();
  const navRef = useRef();

  const navItems = [
    { text: "Home", link: "/", hideInDesktop: false },
    { text: "Shop Now", link: "/products", hideInDesktop: false },
    { text: "Profile", link: "/myprofile", hideInDesktop: true },
    { text: "Orders", link: "/myprofile/orders", hideInDesktop: true },
    { text: "Addresses", link: "/myprofile/addresses", hideInDesktop: true },
  ];

  return (
    <header className="header" ref={navRef}>
      <span
        onClick={() => {
          navRef.current.classList.toggle("active");
        }}
      >
        <i className="fas fa-bars hamburger-menu"></i>
      </span>

      <Link to="/" className="logo">
        Frontstore
      </Link>

      <ul className="nav-bar-links list-style-none">
        <li
          onClick={() => {
            navRef.current.classList.toggle("active");
          }}
          className={`
               hide-in-desktop
           `}
        >
          <button className="btn secondary-btn-text-icon ">
            <span className="btn-icon">
              <i className="far fa-times-circle"></i>
            </span>
            Close
          </button>
        </li>

        {navItems.map(({ text, link, hideInDesktop }) => (
          <li
            key={text}
            className={`list-inline-item ${
              hideInDesktop ? "hide-in-desktop" : ""
            }`}
          >
            <NavLink
              exact={true}
              to={link}
              activeClassName="navlinks-active"
              className="navlinks-style text-left"
            >
              {text}
            </NavLink>
          </li>
        ))}

        <li className=" hide-in-desktop">
          <button className="btn primary-btn-text-icon " onClick={logoutUser}>
            <span className="btn-icon">
              <i className="fas fa-sign-out-alt"></i>
            </span>
            Logout
          </button>
        </li>
      </ul>

      <SearchBox />
      <div className="nav-icons">
        {!isUserLoggedIn ? (
          <Link to="/login">
            <span className="badge-container">
              <i className="fas fa-user"> </i>
            </span>
          </Link>
        ) : (
          <Link to="/myprofile">
            <span className="badge-container">
              Hi {truncateString(`${userProfile?.firstName}`, 5)}
            </span>
          </Link>
        )}

        <Link to="/wishlist">
          <span className="badge-container">
            <i className="fas fa-heart">
              {isUserLoggedIn && (
                <span className="badge-icon badge-pink">
                  {userState.wishlistItems?.length}
                </span>
              )}
            </i>
          </span>
        </Link>

        <Link to="/cart">
          <span className="badge-container">
            <i className="fas fa-shopping-cart">
              {isUserLoggedIn && (
                <span className="badge-icon badge-pink">
                  {isUserLoggedIn && userState.cartItems?.length}
                </span>
              )}
            </i>
          </span>
        </Link>
      </div>
    </header>
  );
};
