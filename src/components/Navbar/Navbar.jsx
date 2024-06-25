//Hooks
import React from "react";
import { NavLink, Link } from "react-router-dom";

//Css
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav">
      <ul id="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

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
