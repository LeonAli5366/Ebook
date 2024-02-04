/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDashbordHome from "./UserDashbordHome";
import UserDashbordOrders from "./UserDashbordOrders";
import UserDashbordChangePassword from "./UserDashbordChangePassword";

const UserDashbord = ({ handleLogout }) => {
  const [showPage, setShowPage] = useState("Home");
  return (
    <div className="drawer lg:drawer-open px-5">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div>
          <UserDashbordHome showPage={showPage}></UserDashbordHome>
          <UserDashbordOrders showPage={showPage}></UserDashbordOrders>
          <UserDashbordChangePassword
            showPage={showPage}
            setShowPage={setShowPage}
          ></UserDashbordChangePassword>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link
              onClick={() => {
                setShowPage("Home");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setShowPage("Orders");
              }}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setShowPage("Password");
              }}
            >
              Change Password
            </Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashbord;
