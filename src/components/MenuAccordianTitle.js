import { useState } from "react";
import MenuAccordianList from "./MenuAccordianList";

MenuAccordianList;
const MenuAccordianTitle = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* accordian title code */}
      <div className="w-6/12 bg-slate-100 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Acorrdian List */}
        {showItems && <MenuAccordianList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default MenuAccordianTitle;
