import { CDN_LINK } from "../utils/contents";
const MenuAccordianList = ({ items }) => {
  console.log(items);
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
              <button className="p-2 shadow-lg bg-black text-white m-auto rounded">
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
