import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../config/Firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
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
      {user ? (
        <NavLink className="links" to="/login">
          <button onClick={logout} className="nav-login-btn">
            Log out
          </button>
        </NavLink>
      ) : (
        <NavLink className="links" to="/login">
          <button className="nav-login-btn">Log In</button>
        </NavLink>
      )}
      <span>{user?.displayName}</span>
    </nav>
  );
};

export default Header;
