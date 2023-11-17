import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import JobsPage from "./components/JobsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
