import React from "react";
import LogoBox from "../components/LogoBox";
import NavLink from "./NavLink";
import StartBox from "./StartBox";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light barraNavegacion">
      <div className="container-fluid">
        <LogoBox />
        <div className="navbar-collapse" id="navbarSupportedContent">
          <NavLink />
          <StartBox />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
