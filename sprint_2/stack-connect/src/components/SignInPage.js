import React from 'react';
import './styles/SignInPage.css';

const SignInPage = () => {
    return (
        <div className="sign-in-page">
            <form className="sign-in-form">
            <h2 className="sign-in-title">Sign In</h2>
                <label className="first-sign-in-label" htmlFor="email">
                    Email:
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="sign-in-input"
                    required
                />
                <label className="sign-in-label" htmlFor="password">
                    Password:
                    <input 
                    type="password" 
                    id="password" 
                    name="password"
                    className="sign-in-input"
                    required
                    />
                </label>
                <br/>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignInPage;
