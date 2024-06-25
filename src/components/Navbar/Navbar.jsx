//Hooks
import React from "react";
import { NavLink, Link } from "react-router-dom";

//Components
import Logo from "../../img/Logo Cam Fit.png";

//Css
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/" className="brand">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="brand-text">
          Pic <span>Search</span>
        </span>
      </Link>
      <ul id="nav-links">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
