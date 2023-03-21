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
        <DropdownToggle>Dropdown Ejemplo</DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Accion 1</DropdownItem>
          <DropdownItem>Accion 2</DropdownItem>
          <DropdownItem>Accion 3</DropdownItem>
          <DropdownItem>Accion 4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ul>
  );
};

export default NavLink;
