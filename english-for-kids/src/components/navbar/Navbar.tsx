import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { ArrLinks } from "../../utils/arrLinks";
import { PropsNavbar } from "./navbar-props-interfaces";
import "./navbar.scss";

const Navbar = ({ open, openNav }: PropsNavbar): JSX.Element => {
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
            openNav();
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
    </nav>
  );
};

export default Navbar;
