/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContex } from "../contextApi/UserContex";
import { useNavigate } from "react-router-dom";
import AdminDashbord from "./AdminDashbord/AdminDashbord";
import UserDashbord from "./UserDashbord/UserDashbord";

const Profile = () => {
  // data
  const navigate = useNavigate();

  // context api
  const { refresh, setRefresh, setUser, user, role } = useContext(AuthContex);

  //   all functions
  const handleLogout = () => {
    localStorage.removeItem("token");
    setRefresh(refresh + 1);
    setUser({});
    navigate("/");
  };

  return (
    <div>
      <div className={`${role === "admin" ? "" : "hidden"}`}>
        <AdminDashbord handleLogout={handleLogout}></AdminDashbord>
      </div>
      <div className={`${role === "admin" ? "hidden" : ""}`}>
        <UserDashbord handleLogout={handleLogout}></UserDashbord>
      </div>
    </div>
  );
};

export default Profile;
