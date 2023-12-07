import React from "react";
import { Link } from "react-router-dom";
import "./styles/SignInPage.css";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";

const SignInPage = () => {
  const email = useField("email");
  const password = useField("password");
  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({ email: email.value, password: password.value });
  };

  return (
    <div className="sign-in-page">
      <form className="sign-in-form">
        <h2 className="sign-in-title">Sign In</h2>
        <label className="first-sign-in-label" htmlFor="email">
          Email:
        </label>
        <input {...email} className="sign-in-input" required />
        <label className="sign-in-label" htmlFor="password">
          Password:
          <input {...password} className="sign-in-input" required />
        </label>
        <br />
        <button
          type="submit"
          className="sign-in-button"
          onSubmit={handleSubmit}
        >
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
