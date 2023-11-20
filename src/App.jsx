import React ,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
const Grocery = lazy(()=> import("./components/Grocery"))
const AppLayout = () => {
  // console.log(resData);
  // console.log(resData[0].info.name);

  const [userName, setUserName] =useState("")
  // dummy authentication logic


  useEffect(()=>{
    const data ={
      name:"Ashwani Sajwan"
    }
    console.log("setusernma called 1:");
    setUserName(data.name)
    console.log("setusernma called 2:");

  },[])
  return (
   < UserContext.Provider value={{loggedInUser : userName ,setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:  <Suspense fallback={ <h1> Loading....</h1>  }> <Grocery /></Suspense> ,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
