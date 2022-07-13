import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NotFound = () => {
  const location = useLocation();

  return (
    <div className="display-flex flex-column align-center">
      <div>
        You searched for{" "}
        <span className="primary-text-color text-bold">
          {location.pathname}
        </span>
      </div>
      <div>
        <img
          loading="lazy"
          src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png"
          alt="Nature"
          className=" img-centered error-page-image"
        />
      </div>
      <div>
        <p className="text-large text-light">
          {" "}
          SORRY We couldn't find any matches!
        </p>
      </div>
      <Link to="/">
        <button className="btn primary-btn">GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
};
