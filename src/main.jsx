import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import UserContex from "./contextApi/UserContex.jsx";
import ProductContext from "./contextApi/ProductContext.jsx";
import { Provider } from "react-redux";
import { store } from "./components/Cart/Store.jsx";
import { getTotals } from "./components/Cart/CartSlice.jsx";

store.dispatch(getTotals())

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <UserContex>
      <ProductContext>
        <RouterProvider router={router} />
      </ProductContext>
    </UserContex>
  </React.StrictMode>
  </Provider>
);
