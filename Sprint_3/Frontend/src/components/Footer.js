// Footer.js
import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="company-info">
          <p>Group Six</p>
          <p>Uusimaa, Finland</p>
        </div>
        <div className="about-link">
          <a href="#/about">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
