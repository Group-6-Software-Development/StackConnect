import logo from "../images/logo.svg";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>
          <strong>STCN</strong>
        </span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-buttons">
        <a href="#_blank" className="button">
          Jobs
        </a>
        <a href="#_blank" id="loginButton" className="button">
          Login
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
