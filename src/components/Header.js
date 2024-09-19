import logoImage from "../utils/logo.jpg";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={logoImage}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign in</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;