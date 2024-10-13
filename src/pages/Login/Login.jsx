import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login">
      <img className="logo" src={assets.logo_big} alt="" />
      <form className="login-form" action="">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? (
          <input
            type="text"
            placeholder="username"
            className="form-input"
            required
          />
        ) : null}

        <input
          type="email"
          placeholder="email address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login Now"}
        </button>
        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms</p>
        </div>
        <div className="login-forget">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an Account
              <span onClick={() => setCurrState("Sign Up")}>click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
