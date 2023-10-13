import RestaurantCard from "./RestaurantCard";
// let resList = require("../../resData.json");
// dont use reslist mock data
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const[ filterdRestaurants, setFilterdRestaurants]= useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("useEffects called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.7453031&lng=78.5198094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("Swiggy Data:", json);
    // console.log(
    //   "Swiggy Data:",
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    console.log(
      "restaurants:",
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="filter">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("searchText:", searchText);
              // ListOfRestaurants.map((res)=>{

              //   console.log(res.info.name);
              // });
              const filteredRestaurant = ListOfRestaurants.filter((res) => {
                console.log("res name:", res.info.name);
                return  res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              console.log("filtered data:", filteredRestaurant);

              setFilterdRestaurants(filteredRestaurant);

            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = ListOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filterdList);
            console.log(filterdList);
          }}
        >
          {" "}
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
