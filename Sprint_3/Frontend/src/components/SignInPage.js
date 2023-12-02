import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:5000/api/user/login";

  const handleLogin = async () => {
    try {
      const response = fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully");
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-in-page">
      <form className="sign-in-form" onClick={handleLogin}>
        <h2 className="sign-in-title">Sign In</h2>
        <label className="first-sign-in-label" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="sign-in-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="sign-in-label" htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            className="sign-in-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        <p className="new-user-text">
          New user ?
          <Link to="/register" className="register-link-button">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
