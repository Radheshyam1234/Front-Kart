import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useProductDataProvider } from "./Context/ProductDataContext/ProductDataProvider";
import { getProductsFromDb } from "./utilities/backendRequest";
import { useStateProvider } from "./Context/StateContext/state-provider";
import { useAuthProvider } from "./Context/AuthContext/AuthProvider";

import { Home, ProductListing, Login, SignUp, Wishlist } from "./Components";
import {
  getUserProfileFromDb,
  getWishlistFromDb,
} from "./utilities/backendRequest";

import "./styles.css";

export const App = () => {
  const { setProductList } = useProductDataProvider();
  const { setUserProfile } = useAuthProvider();
  const { userState, userDispatch } = useStateProvider();
  const navigate = useNavigate();

  useEffect(() => {
    getProductsFromDb(setProductList);
  }, []);

  const token = localStorage.getItem("token");

  useEffect(async () => {
    if (token) {
      getUserProfileFromDb(setUserProfile);
      getWishlistFromDb(userState, userDispatch);
      navigate("/");
    }
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
};
