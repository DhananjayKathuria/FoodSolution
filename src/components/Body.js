import ResCard, { topRatedLabel } from "./ResCard";
// import cards from "../utils/mockData"; no more required as we are fetching live data from api
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // creating a useState variable filteredList which has initial state of the mockdata
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const [tempList, setTempList] = useState([]);
  const RatedResCard = topRatedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5279118&lng=77.20889869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await Data.json();
    console.log(json);
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // ? marks are for optional chaining
    );
    setTempList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you are disconnected. Please check your network.</h1>;

  // Conditional Rendering
  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const templist = filteredList.filter((res) =>
              res.info?.name.toLowerCase().includes(search.toLowerCase())
            );
            setTempList(templist);
          }}
        >
          Search
        </button>
        {/* creating a button, on click of which a callback function is called. filter method is used to filter out the restaurants which have rating 4 or above  */}
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(
              filteredList.filter((cards) => cards.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res_container">
        {/* the below statement loops over all the restaurants in cards variable using map function */}
        {tempList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RatedResCard resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
