import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
/* eslint-disable no-unused-vars */
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function App() {
  const initialOptions = {
    clientId: "AeYX8ElBsoHeV0jWmqUqSkdURCEyWUwiQc1t8LnL-clAO27SDLNvetySbGV7tW140qdiDoQ7CDARYJGp",
    currency: "USD",
    intent: "capture",
};
  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="bg-white text-black">
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
