import { useEffect, useContext, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { OpenNavContext } from "../context/open-nav-ctx/open-nav";
import "./burger-menu.scss";

export const Burger = (): JSX.Element => {
  const { isOpen, openNav } = useContext(OpenNavContext);
  const [toggleIsOpen, setToggleIsOpen] = useState(isOpen);

  let classNames = "b-container";

  if (isOpen) {
    classNames += " open";
  }

  const changeNavState = (): void => {
    setToggleIsOpen((toggle) => !toggle);
  };

  useEffect(() => {
    openNav(toggleIsOpen);
  }, [openNav, toggleIsOpen]);

  return (
    <div className={classNames} onClick={() => changeNavState()} role="none">
      <div className="b-menu">
        <div className="b-bun b-bun--top"></div>
        <div className="b-bun b-bun--mid"></div>
        <div className="b-bun b-bun--bottom"></div>
      </div>
      <Navbar open={isOpen} changeNavState={changeNavState} />
    </div>
  );
};
