import { createContext, useState, useCallback } from "react";

export interface AuthCTX {
  isAuth: boolean;
  toggleAuth: (toggle: boolean) => void;
}

const DEFFAULT_IS_AUTH: AuthCTX = {
  isAuth: false,
  toggleAuth: () => {},
};

export const IsAuthContext = createContext<AuthCTX>(DEFFAULT_IS_AUTH);

export const UpdateIsAuthCTX = (): AuthCTX => {
  const [isAuth, setAuth] = useState(false);

  const toggleAuth = useCallback((toggle: boolean): void => {
    setAuth(toggle);
  }, []);

  return {
    isAuth,
    toggleAuth,
  };
};
