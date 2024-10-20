import React from "react";

const TraversNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src="./logo512.png" alt="" width="32" height="35"></img>
            WorkPlateform.com
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapes navbar-collapse" id="menu">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link text-warning" href="/#linkONE">
                  Find WorkMan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="/#linkONE">
                  Raw Matrial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="/#linkONE">
                  Give Contract
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="/#linkONE">
                  Publish Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="/#linkONE">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TraversNavbar;
