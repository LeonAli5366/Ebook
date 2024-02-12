/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../contextApi/UserContex";
import UserDashboardList from "./UserDashboardList";

const UserDashbordOrders = ({ showPage }) => {
  const [allOrders, setAllOrders] = useState();
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContex);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/order/allorder?email=${user.email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllOrders(data.allOrders);
        setLoading(false);
      });
  }, [user.email]);
  return (
    <div className={`${showPage === "Orders" ? "" : "hidden"}`}>
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Writer</th>
            <th>Product Link</th>
          </tr>
        </thead>

        {loading === true ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          <tbody>
            {allOrders.map((orders) => (
              <UserDashboardList orders={orders} key={orders._id} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserDashbordOrders;
