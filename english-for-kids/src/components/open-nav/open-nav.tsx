import { createContext, useCallback, useState } from "react";

export interface OpenNavCTX {
  isOpen: boolean;
  setMode: (toggle: boolean) => void;
}

const DEFFAULT_OPEN_NAV: OpenNavCTX = {
  isOpen: false,
  setMode: () => {},
};

export const OpenNavContext = createContext<OpenNavCTX>(DEFFAULT_OPEN_NAV);

export const UpdateOpenNavCTX = (): OpenNavCTX => {
  const [isOpen, setIsOpen] = useState(false);

  const setMode = useCallback((toggle: boolean): void => {
    setIsOpen(toggle);
  }, []);

  return {
    isOpen,
    setMode,
  };
};
