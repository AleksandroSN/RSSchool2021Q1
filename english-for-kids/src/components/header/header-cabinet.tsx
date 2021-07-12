export const HeaderCabinet = (): JSX.Element => {
  return (
    <header className="app-header app-header--cabinet">
      <div className="app-header__container">
        <div className="app-header__breadcrumbs">
          <div className="app-header__breadcrumbs--active">Categories</div>
          <div>Words</div>
        </div>
        <div className="app-header__logout">
          <button type="button">Log Out</button>
        </div>
      </div>
    </header>
  );
};

// TODO on click logout redirect to main and logout
