const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <span className="header-title">Where in the world?</span>
      <button className="theme-btn" onClick={toggleTheme}>
        <span className="theme-icon">
          <ion-icon name="moon"></ion-icon>
        </span>
        <span className="theme-btn-text">Change theme</span>
      </button>
    </header>
  );
};

export default Header;
