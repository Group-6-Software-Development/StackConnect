import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import RegisterPage from "./components/RegisterPage";
import SignInPage from "./components/SignInPage";
import JobPostPage from "./components/JobPostPage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/jobs" element={<JobPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
