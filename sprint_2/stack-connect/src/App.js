import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import RegisterPage from "./components/RegisterPage";
import SignInPage from "./components/SignInPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
