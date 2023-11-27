import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/RegisterPage.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const API_URL = "http://localhost:5000/api/users/register";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
      };

      console.log(newUser);

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then((res) => {
        res.json();
        console.log(res.status);
        if (res.status === 400) {
          alert("Email already exists");
        } else {
          alert("Account created successfully");
        }
      });
    }
  };

  return (
    <div className="register-page">
      <div className="register-header">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Register</h2>
          <label className="first-register-label">
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="register-input"
              required
            />
          </label>
          <br />
          <label className="register-label">
            Email:
            <input
              type="email"
              name="email"
              placeholder="your.email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              required
            />
          </label>
          <br />
          <label className="register-label">
            Password:
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              required
            />
          </label>
          <br />
          <label className="register-label">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="**********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register-input"
              required
            />
          </label>
          <br />
          <button type="submit" className="register-button">
            Register
          </button>
          <p className="already-user-text">
            Already a user?
            <Link to="/sign-in" className="sign-in-link-button">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
