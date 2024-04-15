import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/contents";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  // subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);
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
          <li className="px-3">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
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
          <li className="px-3 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
