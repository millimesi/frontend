import React from "react";
import reactLogo from "../assets/react.svg";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <img className="Nav_logo" src={reactLogo} alt="react logo" />
      <h1 className="Nav_titel_name">React Jobs</h1>
      <ul className="Nav_list">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="jobs">Jobs</Link>
        </li>
        <li>
          <Link to="add-jobs">Add Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
