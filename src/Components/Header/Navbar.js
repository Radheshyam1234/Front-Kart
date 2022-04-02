import React from "react";
import { Link } from "react-router-dom";
import { useStateProvider } from "../../Context/StateContext/state-provider";
import { SearchBox } from "./SearchBox";
import { useAuthProvider } from "../../Context/AuthContext/AuthProvider";
import { truncateString } from "../../utilities/turncateString";
import "./Navbar.css";

export const Navbar = () => {
  const { userState } = useStateProvider();
  const { isUserLoggedIn, userProfile } = useAuthProvider();
  return (
    <header className="header">
      <i className="fas fa-bars hamburger-menu"></i>

      <Link to="/" className="logo">
        <i className="fas fa-store"></i>Frontstore
      </Link>

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
