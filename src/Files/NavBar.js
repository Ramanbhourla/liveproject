import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FcComboChart } from "react-icons/fc";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <div className="Brand ">
            BhourlaDevelopment <FcComboChart />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get detail
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to={"/about"}>
                 About
                </Link>
                {/* <Link className="dropdown-item" to={"/contact"}>
                  Self-Esteem Courses
                </Link> */}
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to={"/contact"}>
                  Contact
                </Link>
              </div>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link " to={"/contact"}>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
