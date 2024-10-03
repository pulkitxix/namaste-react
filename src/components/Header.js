import logoImage from "../utils/logo.png";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoImage} />
      </div>
      <div className="nav-items">
        <ul>
          <button
            className="sign-in-btn"
            onClick={() => { btnName === "Login" ?
              setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
