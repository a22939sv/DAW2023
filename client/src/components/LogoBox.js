import React from "react";
// import logo from "../img/logo.png";

const LogoBox = () => {
  return (
    <div className="navbar-nav d-flex me-auto mb-lg-0">
      <li className="nav-item">
        <a className="nav-link text-white" href="/">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-black.svg"
            alt="Logo de HBO MAX"
            width="40px"
            title="Logo de HBO MAX"
          ></img>
        </a>
      </li>
    </div>
  );
};

export default LogoBox;
