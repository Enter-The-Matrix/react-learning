import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {resId}= useParams();
  
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   console.log("menu data:", json);
  //   setResInfo(json.data);
  // };

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("res:", resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h5>{cuisines.join(", ")}</h5>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
       {itemCards.map( item =>{
        return(
        <li key= {item.card.info.id}>{item.card.info.name} -- Rs.{item.card.info.price/100} </li>
        )
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
