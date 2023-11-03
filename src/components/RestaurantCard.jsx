import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log("resdata:",resData);
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

    const styleCard = {
        backgroundColor: "#f0f0f0",
    }

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} /> 
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4> {avgRating}</h4>
      <h4> {sla.deliveryTime} mins eta</h4>
    </div>
  );
};

export default RestaurantCard;
