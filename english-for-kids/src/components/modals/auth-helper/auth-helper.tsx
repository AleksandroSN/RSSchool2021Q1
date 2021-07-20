import "./auth-helper.scss";
import { AuthHelperProps } from "./auth-props-interface";

export const AuthHelper = ({
  visible,
  SetHelperActive,
}: AuthHelperProps): JSX.Element | null => {
  if (!visible) return null;

  return (
    <div className="app-main__model-helper">
      <h2>Please enter Admin : Admin</h2>
      <button
        className="app-main__modal__btn"
        type="button"
        onClick={() => SetHelperActive(false)}
      >
        OK
      </button>
    </div>
  );
};
