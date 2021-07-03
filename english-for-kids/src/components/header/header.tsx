import Burger from "../burger-menu/Burger-menu";
import Switcher from "../switcher/Switcher";

export const Header = () => {
  return (
    <header className="app-header">
      <Burger />
      <Switcher />
    </header>
  );
};
