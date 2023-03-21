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
      <li className="nav-item">
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
          <DropdownToggle className="dropdownMenu" caret>
            Season
          </DropdownToggle>

          <DropdownMenu>
            <a
              className="nav-link text-black active"
              href="/"
              aria-current="page"
            >
              <DropdownItem>Spring</DropdownItem>
            </a>
            <a
              className="nav-link text-black active"
              href="/"
              aria-current="page"
            >
              <DropdownItem>Summer</DropdownItem>
            </a>
            <a
              className="nav-link text-black active"
              href="/"
              aria-current="page"
            >
              <DropdownItem>Fall</DropdownItem>
            </a>
            <a
              className="nav-link text-black active"
              href="/"
              aria-current="page"
            >
              <DropdownItem>Winter</DropdownItem>
            </a>
          </DropdownMenu>
        </Dropdown>
      </li>
    </ul>
  );
};

export default NavLink;
