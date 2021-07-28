import { useContext, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { ArrLinks } from "../../utils/arrLinks";
import { OpenModalContext } from "../context/modal-window-ctx/modal-window";
import { PropsNavbar } from "./navbar-props-interfaces";
import "./navbar.scss";

export const Navbar = ({ open, changeNavState }: PropsNavbar): JSX.Element => {
  const { setMode } = useContext(OpenModalContext);

  let classNames = "app-header__nav";

  if (open) {
    classNames += " open";
  }

  const links = ArrLinks.map(({ link, linkName }, i) => {
    return (
      <li className="app-header__nav-list__item" key={i}>
        <NavLink
          className="app-header__nav-list__link"
          to={link}
          exact
          onClick={() => {
            changeNavState();
          }}
        >
          {linkName}
        </NavLink>
      </li>
    );
  });

  return (
    <nav
      className={classNames}
      onClick={(evt: MouseEvent) => {
        evt.stopPropagation();
      }}
      role="none"
    >
      <ul className="app-header__nav-list">{links}</ul>
      <div className="app-header__nav-btn__wrapper">
        <button
          className="app-header__nav-btn"
          type="button"
          onClick={() => setMode(true)}
        >
          LOGIN
        </button>
      </div>
    </nav>
  );
};
