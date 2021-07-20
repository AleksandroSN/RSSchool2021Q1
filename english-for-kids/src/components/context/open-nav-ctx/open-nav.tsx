import { createContext, useCallback, useState } from "react";

export interface OpenNavCTX {
  isOpen: boolean;
  openNav: (toggle: boolean) => void;
}

const DEFFAULT_OPEN_NAV: OpenNavCTX = {
  isOpen: false,
  openNav: () => {},
};

export const OpenNavContext = createContext<OpenNavCTX>(DEFFAULT_OPEN_NAV);

export const UpdateOpenNavCTX = (): OpenNavCTX => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = useCallback((toggle: boolean): void => {
    setIsOpen(toggle);
  }, []);

  return {
    isOpen,
    openNav,
  };
};
