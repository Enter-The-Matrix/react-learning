import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// let resList = require("../../resData.json");
// dont use reslist mock data
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {loggedInUser,setUserName} = useContext(UserContext)

  useEffect(() => {
    // console.log("use Effects called");
    fetchData();
  }, []);

  const linkStyles = {
    textDecoration: "none",
    color: "black",
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.7453031&lng=78.5198094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    const json = await data.json();
    // console.log("Swiggy Data:", json);
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

    console.log(
      "res:",
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineSatus = useOnlineStatus();

  if (onlineSatus == false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your interent connection
      </h1>
    );
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-1 p-1 ">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // console.log("searchText:", searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) => {
                // console.log("res name:", res.info.name);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log("filtered data:", filteredRestaurant);

              setFilterdRestaurants(filteredRestaurant);
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <div className=" flex items-center m-1 p-1 ">
          <button
            className="filter-btn px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterdList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filterdList);
              // console.log(filterdList);
            }}
          >
            {" "}
            Top Rated Restaurant
          </button>
        </div>
        <div className=" flex items-center m-1 p-1 ">
          <label className="mx-1" htmlFor=""> UserName </label>
          <input className="border rounded-sm p-1 border-gray-600" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value) } />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterdRestaurants.map((restaurant) => (
          <Link
            style={linkStyles}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            {true ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
