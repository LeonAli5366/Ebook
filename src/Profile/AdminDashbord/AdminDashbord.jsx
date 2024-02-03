/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminDashbordHomePage from "./AdminDashbordPages/AdminDashbordHomePage";
import AdminDashbordProductPage from "./AdminDashbordPages/AdminDashbordProductPage";
import AdminDashbordChangePassword from "./AdminDashbordPages/AdminDashbordChangePassword";
import AdminDashbordCreateProduct from "./AdminDashbordPages/AdminDashbordCreateProduct";

const AdminDashbord = ({ handleLogout }) => {
  // all state
  const [showPage, setShowPage] = useState("Home");
  

  return (
    <div className="drawer lg:drawer-open px-5">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* pages */}
        <AdminDashbordHomePage showPage={showPage}></AdminDashbordHomePage>
        <AdminDashbordProductPage
          showPage={showPage}
          setShowPage={setShowPage}
        ></AdminDashbordProductPage>
        <AdminDashbordChangePassword
          showPage={showPage}
          setShowPage={setShowPage}
        ></AdminDashbordChangePassword>
        <AdminDashbordCreateProduct showPage={showPage} setShowPage={setShowPage}></AdminDashbordCreateProduct>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              setShowPage("Home");
            }}
          >
            <Link>Home</Link>
          </li>
          <li
            onClick={() => {
              setShowPage("Products");
            }}
          >
            <Link>All Products</Link>
          </li>
          <li
            onClick={() => {
              setShowPage("createProduct");
            }}
          >
            <Link>Create Product</Link>
          </li>
          <li
            onClick={() => {
              setShowPage("Password");
            }}
          >
            <Link>Change Admin password</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashbord;
