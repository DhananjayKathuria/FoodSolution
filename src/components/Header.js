import { useState } from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo_container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about-Us">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact-Us">Contact Us</Link>
          </li>
          <li className="px-3">Cart</li>
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
