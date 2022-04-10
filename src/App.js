import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useProductDataProvider } from "./Context/ProductDataContext/ProductDataProvider";
import { useStateProvider } from "./Context/StateContext/state-provider";
import { useAuthProvider } from "./Context/AuthContext/AuthProvider";

import {
  Navbar,
  Home,
  ProductListing,
  ProductDetail,
  Login,
  SignUp,
  Wishlist,
  Cart,
  SearchResultPage,
} from "./Components";

import { PrivateRoute } from "./Components/PrivateRoute";
import {
  getProductsFromDb,
  getUserProfileFromDb,
  getWishlistFromDb,
  getCartFromDb,
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
      getCartFromDb(userState, userDispatch);

      navigate("/");
    }
  }, [token]);

  return (
    <div className="App">
      <Navbar />
      <div className="spacer-3rem"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
