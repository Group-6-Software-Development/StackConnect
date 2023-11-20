import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import RegisterPage from "./components/RegisterPage";
import SignInPage from "./components/SignInPage";
import JobPostPage from "./components/JobPostPage";
import EmployerProfile from "./components/EmployerProfile";
import Footer from "./components/Footer";
import JobsPage from "./components/JobsPage";
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
          <Route path="/post-job" element={<JobPostPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/employer-profile" element={<EmployerProfile />} />
          <Route path="/developer-profile" element={<EmployerProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
