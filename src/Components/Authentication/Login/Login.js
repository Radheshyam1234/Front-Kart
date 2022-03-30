import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const { loginUser } = useAuthProvider();

  const guestLogin = () => {
    setEmail("userabc@gmail.com");
    setPassword("user");
  };

  return (
    <div className="auth-container">
      <h3 className="text-center">Login</h3>
      <div className="auth-form-container display-flex-column">
        <label
          htmlFor="email"
          className="form-label form-label-required-field text-semibold"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          className="form-field"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label
          htmlFor="password"
          className="form-label form-label-required-field text-semibold"
        >
          Password
        </label>
        <input
          type={hidePassword ? "password" : "text"}
          id="password"
          className="form-field"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {hidePassword ? (
          <i
            className="fas fa-eye"
            onClick={() => {
              setHidePassword(false);
            }}
          ></i>
        ) : (
          <i
            className="fas fa-eye-slash"
            onClick={() => setHidePassword(true)}
          ></i>
        )}

        <button className="btn primary-btn-outline" onClick={guestLogin}>
          Login as Guest
        </button>
        <button
          className="btn primary-btn"
          onClick={() => {
            loginUser({ email, password });
          }}
        >
          Login
        </button>
      </div>
      <p>
        Don't have an account ?
        <Link to="/signup">
          <span className="primary-text-color">
            <b> Create an account </b>
          </span>
        </Link>
      </p>
    </div>
  );
};
