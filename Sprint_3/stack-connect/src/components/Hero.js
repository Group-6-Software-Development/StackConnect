import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Stack Connect</h1>
          <p>
            Discover Job opportunities
          </p>
          <Link to="/register" className="btn hero-btn">
            Register Now
          </Link>
        </div>
      </section>
    );
  }
  
  export default Hero;