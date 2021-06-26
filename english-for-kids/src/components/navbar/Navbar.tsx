import React from "react";
import { PropsNavbar } from "./navbar-props-interfaces";
import "./navbar.scss";

const Navbar = ({ open }: PropsNavbar): JSX.Element => {
  let classNames = "app-header__nav";

  if (open) {
    classNames += " open";
  }

  return (
    <nav className={classNames}>
      <ul className="app-header__nav-list">
        <li className="app-header__nav-list__item">
          <a className="app-header__nav-list__link" href="/">
            Main Page
          </a>
        </li>
        <li className="app-header__nav-list__item">
          <a className="app-header__nav-list__link" href="/">
            Cat1
          </a>
        </li>
        <li className="app-header__nav-list__item">
          <a className="app-header__nav-list__link" href="/">
            Cat2
          </a>
        </li>
        <li className="app-header__nav-list__item">
          <a className="app-header__nav-list__link" href="/">
            Cat3
          </a>
        </li>
        <li className="app-header__nav-list__item">
          <a className="app-header__nav-list__link" href="/">
            Statistics
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
