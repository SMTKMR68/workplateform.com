import React from "react";

const NewModifiedNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid bg-dark">
          <a className="navbar-brand text-warning" href="#/Logo">
            WorkPlateform.com
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link ms-1" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-1" href="#Service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-1" href="#Product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-1" href="#Work-Force">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-1" href="#Contract">
                  Contract
                </a>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link ms-2" href="#Login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-2" href="#SigIN">
                  SigIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewModifiedNavbar;
