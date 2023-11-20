import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {

// const [showItems, setShowItems] = useState(false)

//   console.log(data);
const handleClick =()=>{
  setShowIndex()
}
  return (
    <div>
      <div className=" w-6/12 bg-gray-100 mx-auto my-2 py-2 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> 🔽 </span>
        </div>
       { showItems && <ItemList items={data.itemCards} />} 
      </div>
    </div>
  );
};

export default RestaurantCategory;
