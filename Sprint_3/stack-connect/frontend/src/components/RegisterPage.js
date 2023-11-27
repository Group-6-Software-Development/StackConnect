import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './styles/RegisterPage.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Registration data:', formData);
        setFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className="register-page">
            <div className="register-header">
            <form className="register-form" onSubmit = {handleSubmit}>
            <h2 className="register-title">Register</h2>
                <label className="first-register-label">
                    Username:
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="" 
                    value={formData.username} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <label className="register-label">
                    Email:
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <label className="register-label">
                    Password:
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <button type="submit" className="register-button">Register</button>
                <p className='already-user-text'>
                    Already user ?
                    <Link to="/sign-in" className="sign-in-link-button">
                    Sign In
                    </Link></p>
            </form>
        </div>
    </div>
    );
};

export default RegisterPage;
