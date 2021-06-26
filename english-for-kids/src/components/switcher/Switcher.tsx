import React from "react";
import "./switcher.scss";

const Switcher = () => {
  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="toggleSwitch">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <span className="toggle-switch__train">Train</span>
        <span className="toggle-switch__play">Play</span>
        <span className="toggle-switch__tumbler"></span>
      </label>
    </div>
  );
};

export default Switcher;
