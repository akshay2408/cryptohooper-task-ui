import React from 'react'

const Navbar = () => {
  return (
    <nav className="crypto-navbar navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./img/logo.png" className="logoimg" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="./img/menu_icon.png" />
        </button>
        <a href="#" className="d-lg-none d-md-block mobileSignup">
          <img
            src="./img/user_icon.png"
            style={{ width: "35px", height: "35px" }}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav justify-content-center m-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Charts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Company
              </a>
            </li>
          </ul>
          <form className="d-lg-flex d-none justify-content-end align-items-center">
            <a className="logintext" href="#">
              Login
            </a>
            <button
              className="btn btn-outline-success signupLink"
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar