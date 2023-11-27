import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/SignInPage.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = "http://localhost:5000/api/users/login";

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        res.json();
        if (res.status === 400) {
          alert("Invalid email or password");
        } else {
          alert("Logged in successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-in-page">
      <form className="sign-in-form" onSubmit={handleSubmit}>
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
}
