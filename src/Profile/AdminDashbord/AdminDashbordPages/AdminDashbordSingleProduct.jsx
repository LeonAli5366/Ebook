/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AdminDashbordSingleProduct = ({ product }) => {
  const { name, price, discount, description, _id } = product;
  return (
    <div className="card w-80 bg-base-100 shadow-xl cursor-pointer border">
      <figure>
        <img
          className="h-[250px] p-3"
          src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
          alt="Book photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="">Price: {price}</h2>
        <h2 className="">discount: {discount}%</h2>
        <h2 className="">
          {description.length > 95
            ? description.slice(0, 95) + "..."
            : description}
        </h2>
      </div>
    </div>
  );
};

export default AdminDashbordSingleProduct;
