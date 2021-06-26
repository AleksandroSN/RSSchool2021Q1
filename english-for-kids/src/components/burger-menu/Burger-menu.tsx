import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./burger-menu.scss";

const Burger = (): JSX.Element => {
  let classNames = "b-container";

  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    classNames += " open";
  }

  const openNav = (): void => {
    return setIsOpen((toggle) => !toggle);
  };

  return (
    <div className={classNames} onClick={() => openNav()} role="none">
      <div className="b-menu">
        <div className="b-bun b-bun--top"></div>
        <div className="b-bun b-bun--mid"></div>
        <div className="b-bun b-bun--bottom"></div>
      </div>
      <Navbar open={isOpen} />
    </div>
  );
};

export default Burger;
