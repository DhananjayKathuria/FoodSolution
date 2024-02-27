import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenuFetch from "../utils/useRestMenuFetch";
import MenuAccordianTitle from "./MenuAccordianTitle";

const RestMenu = () => {
  const { resid } = useParams();
  const resMenu = useRestMenuFetch(resid);
  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, locality, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <h3>{<p>{costForTwoMessage}</p>}</h3>
      <h3>Menu Items</h3>
      {categories.map((category) => (
        <MenuAccordianTitle
          key={category?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestMenu;
