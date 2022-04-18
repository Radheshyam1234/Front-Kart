import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthProvider } from "../Context/AuthContext/AuthProvider";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuthProvider();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
