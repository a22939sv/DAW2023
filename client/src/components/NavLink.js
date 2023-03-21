import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const NavLink = () => {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };

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
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret>Season</DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Spring</DropdownItem>
          <DropdownItem>Summer</DropdownItem>
          <DropdownItem>Fall</DropdownItem>
          <DropdownItem>Winter</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ul>
  );
};

export default NavLink;
