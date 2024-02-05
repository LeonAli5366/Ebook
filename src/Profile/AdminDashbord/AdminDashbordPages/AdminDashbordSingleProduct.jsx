/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AdminDashbordSingleProduct = ({ product }) => {
  const { name, price, discount, description, _id, writer } = product;
  return (
    <Link
      to={`/product/single/${_id}`}
      className="card w-80 bg-base-100 shadow-xl cursor-pointer border"
    >
      <figure>
        <img
          className="h-[250px] p-3"
          src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
          alt="Book photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="">Writer: {writer}</h2>
        <h2 className="">Price: {price}</h2>
        <h2 className="">discount: {discount}%</h2>
        <h2 className="">
          {description.length > 95
            ? description.slice(0, 95) + "..."
            : description}
        </h2>
      </div>
    </Link>
  );
};

export default AdminDashbordSingleProduct;
