import React, { useState } from "react";
import "./Css/RegisterSingin.css";
import { Link } from "react-router-dom";

export const RegisterSingin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    // Add your authentication logic here
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>

        <div className="social-divider">
          <Link style={{ textDecoration: "none" }}>
            Already hava an account?{" "}
          </Link>
          <Link to={"/loginSingup"}>Login now</Link>
        </div>
      </div>
    </div>
  );
};
