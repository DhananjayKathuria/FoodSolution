import { CDN_LINK } from "../utils/contents";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuAccordianList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-b-2 border-gray-200 flex"
        >
          <div className="py-2 w-9/12">
            <span>{item.card.info.name}</span>
            <span> - ₹{item.card.info.price / 100}</span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 shadow-lg bg-black text-white m-auto rounded"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_LINK + item.card.info.imageId} alt="NO IMAGE" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuAccordianList;
