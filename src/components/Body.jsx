import RestaurantCard from "./RestaurantCard";
let resList = require("../../resData.json");
import { useState } from "react";
const Body = () => {

  const[listOfRestaurant, setListOfRestaurant]= useState(resList)

    return (
      <div className="body">
        <div className="search"> 
        <button className="filter-btn" 
        onClick={()=>{
            const filterdList = resList.filter(
                res=>res.info.avgRating>4
            )
            setListOfRestaurant(filterdList)
            console.log(filterdList);
        }
        }> Top Rated Restaurant</button>
         </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;