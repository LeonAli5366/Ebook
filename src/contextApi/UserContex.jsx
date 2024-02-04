/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AuthContex = createContext();

const UserContex = ({ children }) => {
  // all state
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(0);

  // get user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/v1/user/getUser", {
        headers: {
          authorisation: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setUser(data.userData);
          }
          console.log(data);
        });
    }
  }, [refresh]);

  const role = user?.role;

  const contextValue = { refresh, setRefresh, user, role, setUser };
  return (
    <AuthContex.Provider value={contextValue}>{children}</AuthContex.Provider>
  );
};

export default UserContex;
