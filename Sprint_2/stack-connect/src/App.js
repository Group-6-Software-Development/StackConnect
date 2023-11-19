import "./App.css";
import Navbar from "./components/bNavbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployerProfile from "./components/EmployerProfile";
import DeveloperProfile from "./components/DeveloperProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/employer-profile" element={<EmployerProfile />} />
          <Route path="/developer-profile" element={<DeveloperProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
