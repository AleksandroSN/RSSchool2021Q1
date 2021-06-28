import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink className="app-header__nav-list__link" to="/" exact>
            Main Page
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/1">
            Action (set A)
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/2">
            Action (set B)
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/3">
            Animal (set A)
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/4">
            Animal (set B)
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/5">
            Clothes
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/6">
            Emotions
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/7">
            Berries
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/game/8">
            Furniture
          </NavLink>
        </li>
        <li className="app-header__nav-list__item">
          <NavLink className="app-header__nav-list__link" to="/statistics">
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
