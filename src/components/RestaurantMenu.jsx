import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex]= useState(null)

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   console.log("menu data:", json);
  //   setResInfo(json.data);
  // };

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log("res:", resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "newdata:",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  // we cannot write @ in js statement do we use @in side [] like this [@something]
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCards);
  console.log("cat", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <h5 className="font-bold text-lg">{cuisines.join(", ")}</h5>
      <h3>{costForTwoMessage}</h3>
      {/* <h2>Menu</h2>
      <ul>
       {itemCards.map( item =>{
        return(
        <li key= {item.card.info.id}>{item.card.info.name} -- Rs.{item.card.info.price/100} </li>
        )
        })}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory key={category?.card?.card.title } 
         data={category?.card?.card}
          showItems={index === showIndex ? true:false} 
          setShowIndex ={ ()=> setShowIndex(index)}
          />
      ))}
    </div>
  );
};

export default RestaurantMenu;
