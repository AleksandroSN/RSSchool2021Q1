import React from "react";
import { NavLink } from "react-router-dom";
import { ArrLinks } from "../../utils/arrLinks";
import { PropsNavbar } from "./navbar-props-interfaces";
import "./navbar.scss";

const Navbar = ({ open }: PropsNavbar): JSX.Element => {
  let classNames = "app-header__nav";

  if (open) {
    classNames += " open";
  }

  const links = ArrLinks.map(({ link, linkName }) => {
    return (
      <li className="app-header__nav-list__item">
        <NavLink className="app-header__nav-list__link" to={link} exact>
          {linkName}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={classNames}>
      <ul className="app-header__nav-list">{links}</ul>
    </nav>
  );
};

export default Navbar;
