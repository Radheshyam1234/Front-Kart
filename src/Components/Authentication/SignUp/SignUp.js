import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../../../Context/AuthContext/AuthProvider";

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signupNewUser } = useAuthProvider();

  return (
    <div className="auth-container">
      <h3 className="text-center">Sign-up</h3>
      <div className="auth-form-container display-flex-column">
        <div className="row">
          <div className="w-30">
            <label className="form-label form-label-required-field text-semibold">
              First Name
            </label>
          </div>
          <div className="w-70">
            <input
              type="text"
              className="form-field"
              placeholder="Enter your first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="w-30">
            <label className="form-label form-label-required-field text-semibold">
              Last Name
            </label>
          </div>
          <div className="w-70">
            <input
              type="text"
              className="form-field"
              placeholder="Enter your last-name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="w-30">
            <label className="form-label form-label-required-field text-semibold">
              Email
            </label>
          </div>
          <div className="w-70">
            <input
              type="text"
              className="form-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="w-30">
            <label className="form-label form-label-required-field text-semibold">
              Password
            </label>
          </div>
          <div className="w-70">
            <input
              type="password"
              className="form-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          className="btn primary-btn"
          onClick={() => {
            signupNewUser({ email, password, firstName, lastName });
          }}
        >
          Create account
        </button>
      </div>
      <p>
        Already have an account ?
        <Link to="/login">
          <span className="primary-text-color">
            <b> Sign In </b>
          </span>
        </Link>
      </p>
    </div>
  );
};
