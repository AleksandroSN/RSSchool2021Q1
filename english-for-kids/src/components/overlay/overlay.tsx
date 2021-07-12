import { useContext } from "react";
import { OpenModalContext } from "../context/modal-window-ctx/modal-window";
import "./overlay.scss";

interface OverlayProps {
  visible: boolean;
}

export const Overlay = ({ visible }: OverlayProps): JSX.Element | null => {
  const { setMode } = useContext(OpenModalContext);
  if (!visible) return null;

  return (
    <div className="overlay" role="none" onClick={() => setMode(false)}></div>
  );
};
