// Footer.js
import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      {" "}
      <strong>{`Copyright © Group Six Industries 2023 - ${year}`} </strong>{" "}
    </footer>
  );
};

export default Footer;
