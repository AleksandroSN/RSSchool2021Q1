import { useEffect, useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { OpenNavContext } from "../context/open-nav-ctx/open-nav";
import "./burger-menu.scss";

const Burger = (): JSX.Element => {
  const { isOpen, setMode } = useContext(OpenNavContext);
  const [toggleIsOpen, setToggleIsOpen] = useState(isOpen);

  let classNames = "b-container";

  if (isOpen) {
    classNames += " open";
  }

  const openNav = (): void => {
    setToggleIsOpen((toggle) => !toggle);
  };

  useEffect(() => {
    setMode(toggleIsOpen);
  }, [setMode, toggleIsOpen]);

  return (
    <div className={classNames} onClick={() => openNav()} role="none">
      <div className="b-menu">
        <div className="b-bun b-bun--top"></div>
        <div className="b-bun b-bun--mid"></div>
        <div className="b-bun b-bun--bottom"></div>
      </div>
      <Navbar open={isOpen} openNav={openNav} />
    </div>
  );
};

export default Burger;
