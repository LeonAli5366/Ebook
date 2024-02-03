import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import UserContex from "./contextApi/UserContex.jsx";
import ProductContext from "./contextApi/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContex>
      <ProductContext>
        <RouterProvider router={router} />
      </ProductContext>
    </UserContex>
  </React.StrictMode>
);
