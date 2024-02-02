import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddToCart from "../pages/AddToCart/AddToCart";
import AllProducts from "../pages/AllProducts/AllProducts";

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
        path:`/addtocart`,
        element:<AddToCart/>
      },
      {
        path:'/allproducts',
        element:<AllProducts/>
      }
    ],
  },
]);
