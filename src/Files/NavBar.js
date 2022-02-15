import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FcComboChart } from "react-icons/fc";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="">
          <div className="Brand">
            <u>BhourlaDevelopment</u> <FcComboChart />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home <span className="sr-only"></span>
            </NavLink>
            <NavLink className="nav-item nav-link active" to="/services">
              Servises
            </NavLink>
            <NavLink className="nav-item nav-link active" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link active" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
