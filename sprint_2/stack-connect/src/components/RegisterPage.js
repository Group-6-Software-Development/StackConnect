import React from 'react';
import { useState } from 'react';
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
            <h2 className="register-title">Register</h2>
            <form className="register-form" onSubmit = {handleSubmit}>
                <label className="register-label">
                    username:
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <label className="register-label">
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <label className="register-label">
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    className="register-input"
                    required
                    />
                </label>
                <br/>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    </div>
    );
};

export default RegisterPage;
