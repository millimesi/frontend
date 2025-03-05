import React from "react";
import reactLogo from "../assets/react.svg";
import "./navBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "navLinkIsActive" : "navLink";
  };
  return (
    <nav>
      <Link to="/">
        <img className="Nav_logo" src={reactLogo} alt="react logo" />
        <h1 className="Nav_titel_name">React Jobs</h1>
      </Link>

      <ul className="Nav_list">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="jobs" className={navLinkClass}>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="add-jobs" className={navLinkClass}>
            Add Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
