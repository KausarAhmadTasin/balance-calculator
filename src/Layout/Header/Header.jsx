import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "links")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "links")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "links")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active" : "links")}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink className="links" to="/login">
        <button className="nav-login-btn">Log In</button>
      </NavLink>
    </nav>
  );
};

export default Header;
