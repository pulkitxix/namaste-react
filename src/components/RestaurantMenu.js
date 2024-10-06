import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../../index.css";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString } =
    resInfo.cards?.[2]?.card?.card?.info || {};
  const itemCards = resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu-container">
      <h1 className="restaurant-name">{name}</h1>
      <h3 className="cost-for-two">
        {costForTwoMessage} {" | "} {avgRatingString} {" ("} {totalRatingsString} {")"}
      </h3>
      <h4 className="cuisines">{cuisines?.join(", ")}</h4>

      <ul className="menu-list">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item?.card?.info?.id} className="menu-item">
              {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice/100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
