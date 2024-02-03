import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddToCart from "../pages/AddToCart/AddToCart";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Profile from "../Profile/Profile";
import AllProduct from "../pages/AllProducts/AllProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/contactus',
        element:<ContactUs/>
      },
      {
        path:`/addtocart/:id`,
        element:<AddToCart/>,
        loader:({params})=>fetch(`http://localhost:5000/api/v1/product/product/single/${params.id}`)
      },
      {
        path:'/allproducts',
        element:<AllProduct/>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
