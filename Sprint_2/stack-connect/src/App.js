import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import JobsPage from "./components/JobsPage";
import EmployerProfile from "./components/EmployerProfile";
import DeveloperProfile from "./components/DeveloperProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/employer-profile" element={<EmployerProfile />} />
          <Route path="/developer-profile" element={<DeveloperProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
