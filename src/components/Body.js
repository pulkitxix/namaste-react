import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6168395&lng=77.0672395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(restaurantList);
    setRestaurants(restaurantList);
  };

  const handleSearch = () => {
    const filteredResList = allRestaurants.filter((res) => {
      const nameMatches = res.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const cuisineMatches = res.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      );
      return nameMatches || cuisineMatches;
    });
    setRestaurants(filteredResList);
  };

  const handleTopRatedFilter = () => {
    const filteredResList = allRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setRestaurants(filteredResList);
  };

  if (!restaurants || restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            placeholder="Enter the restaurant name or cuisine"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              // Reset to original list if search text is cleared
              if (e.target.value === "") {
                setRestaurants(allRestaurants);
              }
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
