import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { OpenModalContext } from "../context/modal-window-ctx/modal-window";
import "./authorize.scss";

interface ModalProps {
  visible: boolean;
}

export const ModalAuthorize = ({ visible }: ModalProps): JSX.Element | null => {
  const [login, setLogin] = useState<boolean>(false);
  const { setMode } = useContext(OpenModalContext);

  if (!visible) return null;

  if (login) {
    return <Redirect to="/cabinet" />;
  }

  return (
    <div className="app-main__modal-container">
      <form className="app-main__modal-form">
        <h3>Login</h3>
        <input
          className="app-main__modal-input"
          type="text"
          name="formLogin"
          id="formLogin"
          placeholder="login"
        />
        <input
          className="app-main__modal-input"
          type="password"
          name="formPassword"
          id="formPassword"
          placeholder="password"
        />
        <div className="app-main__modal__btn-container">
          <button
            className="app-main__modal__btn btn-abort"
            type="button"
            onClick={() => setMode(false)}
          >
            Cancel
          </button>
          <button
            className="app-main__modal__btn btn-success"
            type="button"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
