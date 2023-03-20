import React from "react";

const NavLink = () => {
  return (
    <ul className="navbar-nav d-flex me-auto mb-lg-0">
      <li className="nav-item">
        <a className="nav-link text-black active" href="/" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black active" href="/" aria-current="page">
          Men
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-black active" href="/" aria-current="page">
          Women
        </a>
      </li>
    </ul>
  );
};

export default NavLink;
