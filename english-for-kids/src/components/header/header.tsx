import { Burger } from "../burger-menu/Burger-menu";
import { Switcher } from "../switcher/Switcher";

export const Header = (): JSX.Element => {
  return (
    <header className="app-header">
      <div className="app-header__container">
        <Burger />
        <Switcher />
      </div>
    </header>
  );
};
