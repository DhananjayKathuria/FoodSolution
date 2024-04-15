import { useSelector } from "react-redux";
import MenuAccordianList from "./MenuAccordianList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    // dispatch an action
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <MenuAccordianList items={cartItems} />
        {cartItems.length === 0 && <h1>Continue Shopping!</h1>}
        <button
          className="m-2 p-2 bg-black text-white rounded-lg"
          disabled={cartItems.length === 0}
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
