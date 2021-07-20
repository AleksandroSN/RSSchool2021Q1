import { ButtonsFunc } from "./button-props-interface";
import "./buttons.scss";

export const Button = ({ clearStorage }: ButtonsFunc): JSX.Element => {
  return (
    <div
      className="app-main__table-btns"
      onClick={() => clearStorage()}
      role="none"
    >
      <button className="btn" type="button">
        <span className="btn__inner">Clear statistics</span>
      </button>
    </div>
  );
};
