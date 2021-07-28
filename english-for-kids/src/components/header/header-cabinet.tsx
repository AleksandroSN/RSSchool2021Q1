import { useContext } from "react";
import { IsAuthContext } from "../context/authorization-ctx/authorization-ctx";

export const HeaderCabinet = (): JSX.Element => {
  const { toggleAuth } = useContext(IsAuthContext);
  console.log("HELLO");
  
  return (
    <header className="app-header app-header--cabinet">
      <div className="app-header__container">
        <div className="app-header__breadcrumbs">
          <div className="app-header__breadcrumbs--active">Categories</div>
          <div>Words</div>
        </div>
        <div className="app-header__logout">
          <button type="button" onClick={() => toggleAuth(false)}>
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};
