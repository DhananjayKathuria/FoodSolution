import { useState } from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  return (
    <div id="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-Us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-Us">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                loginbtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
