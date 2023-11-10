import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import smokingBurgerImage from '../utils/smokingburger.png';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  
  const onlineSatus = useOnlineStatus()

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50">
      {/* <div className="logo-container"> */}
        <img className="w-40" src={smokingBurgerImage}/>
      {/* </div> */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status: {onlineSatus ?"🟢":"🔴" } </li>
          <li> 
            <Link to={'/'}>Home </Link> </li>
          <li className="px-4"> <Link to='/about'> About Us </Link></li>
          <li className="px-4"> <Link to='/contact'> Contact Us </Link></li>
          <li className="px-4"> <Link to='/grocery'> Grocery </Link></li>

          <li className="px-4">  Cart </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
