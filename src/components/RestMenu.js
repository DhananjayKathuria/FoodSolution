import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenuFetch from "../utils/useRestMenuFetch";

const RestMenu = () => {
  const { resid } = useParams();
  const resMenu = useRestMenuFetch(resid);
  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, locality, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{locality}</p>
      <h3>{<p>{costForTwoMessage}</p>}</h3>
      <h3>Menu Items</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"₹ "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestMenu;
