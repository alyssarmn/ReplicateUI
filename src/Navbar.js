import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="logo-container">
            <img
              src="./logo.png"
              className="logo"
              alt="Logo"
              width="100%"
              height="100%"
            />
          </div>
        </li>
        <div className="nav-gnb">
          <li className="nav-item">
            <a className="nav-link">PROFILE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">DISCOGRAPHY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">GALLERY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">VIDEO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">FROM SEVENTEEN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">NOTICE</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
