import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // console.log("resdata:",resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

    // for inline css
    // const styleCard = {
    //     backgroundColor: "#f0f0f0",
    // }

  return (
    <div className="m-4 p-4 w-[270px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg w-[100%] h-[160px]" src={CDN_URL + cloudinaryImageId} /> 
      <h3 className="font-bold py-1 text-lg ">{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4> {avgRating}</h4>
      <h4> {sla.deliveryTime} mins eta</h4>
    </div>
  );
};


// higher  order component
// input - res card
// output - res card promoted

export const withPromotedLabel =() =>{
  return ( props ) => {

    return(
      <div>
        <label htmlFor=""> Promoted </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
