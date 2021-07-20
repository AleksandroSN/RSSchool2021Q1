import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IsAuthContext } from "../../context/authorization-ctx/authorization-ctx";
import { OpenModalContext } from "../../context/modal-window-ctx/modal-window";
import { AuthHelper } from "../auth-helper/auth-helper";
import { ModalProps } from "./authorize-props-interface";
import "./authorize.scss";
import { Input } from "../../inputs/inputs";
import { FormValues } from "../../inputs/inputs-props-interface";

export const ModalAuthorize = ({ visible }: ModalProps): JSX.Element | null => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [helperActive, SetHelperActive] = useState<boolean>(false);
  const { setMode } = useContext(OpenModalContext);
  const { toggleAuth } = useContext(IsAuthContext);

  const { register, handleSubmit } = useForm<FormValues>();

  if (!visible) return null;

  const checkAdmin = (data: FormValues) => {
    const login = data.login.toLowerCase().trim();
    const password = data.pass.toLowerCase().trim();
    if (login === "admin" && password === "admin") {
      toggleAuth(true);
      setIsLogin(true);
      setMode(false);
    } else {
      SetHelperActive(true);
    }
  };

  if (isLogin) {
    return <Redirect to="/cabinet" />;
  }

  return (
    <div className="app-main__modal-container">
      <form
        className="app-main__modal-form"
        onSubmit={handleSubmit(checkAdmin)}
      >
        <h3>Login</h3>
        <Input
          label="login"
          type="text"
          labelFor="authorizeFormLogin"
          inputClass="app-main__modal-input"
          register={register}
          required
        />
        <Input
          label="pass"
          type="password"
          labelFor="authorizeFormPass"
          inputClass="app-main__modal-input"
          register={register}
          required
        />
        <div className="app-main__modal__btn-container">
          <button
            className="app-main__modal__btn btn-abort"
            type="button"
            onClick={() => setMode(false)}
          >
            Cancel
          </button>
          <button className="app-main__modal__btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
      <AuthHelper visible={helperActive} SetHelperActive={SetHelperActive} />
    </div>
  );
};
