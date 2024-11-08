import React from "react";
import { Link, Outlet } from "react-router-dom";

const NewModifiedNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid bg-dark">
          <Link className="navbar-brand text-warning" to="/">
            WorkPlateform.com
          </Link>
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
                <Link className="nav-link ms-1" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-1" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-1" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-1" to="/workforce">
                  Work Force
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-1" to="/contract">
                  Contract
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-2" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NewModifiedNavbar;
