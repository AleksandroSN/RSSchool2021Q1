import { createContext, useCallback, useState } from "react";

export interface OpenModalCTX {
  isOpen: boolean;
  setMode: (toggle: boolean) => void;
}

const DEFFAULT_OPEN_NAV: OpenModalCTX = {
  isOpen: false,
  setMode: () => {},
};

export const OpenModalContext = createContext<OpenModalCTX>(DEFFAULT_OPEN_NAV);

export const UpdateOpenModalCTX = (): OpenModalCTX => {
  const [isOpen, setIsOpen] = useState(false);

  const setMode = useCallback((toggle: boolean): void => {
    setIsOpen(toggle);
  }, []);

  return {
    isOpen,
    setMode,
  };
};
