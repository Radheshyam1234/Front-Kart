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
  ProfilePage,
  MyProfile,
  Orders,
  Addresses,
  EditProfile,
} from "./Components";
import { Toast } from "./Components/Toast/Toast";
import { PrivateRoute } from "./Components/PrivateRoute";
import { useToast } from "./Context/ToastContext/ToastProvider";
import {
  getProductsFromDb,
  getUserProfileFromDb,
  getWishlistFromDb,
  getCartFromDb,
  getAddresses,
} from "./utilities/backendRequest";

import "./styles.css";

export const App = () => {
  const { setProductList } = useProductDataProvider();
  const { setUserProfile, setAddresses } = useAuthProvider();
  const { userState, userDispatch } = useStateProvider();
  const { toastMsg } = useToast();
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
      getAddresses(setAddresses);
      navigate("/");
    }
  }, [token]);

  return (
    <div className="App">
      <Navbar />
      {toastMsg.msg && <Toast {...toastMsg} />}
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
        <Route
          path="myprofile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="addresses"
            element={
              <PrivateRoute>
                <Addresses />
              </PrivateRoute>
            }
          />

          <Route
            path="edit"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="orders"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
