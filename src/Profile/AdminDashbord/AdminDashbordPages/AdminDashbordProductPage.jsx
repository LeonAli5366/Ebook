/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AllProducts } from "../../../contextApi/ProductContext";
import AdminDashbordSingleProduct from "./AdminDashbordSingleProduct";

const AdminDashbordProductPage = ({ showPage, setShowPage }) => {
  const { products } = useContext(AllProducts);
  return (
    <div className={`${showPage === "Products" ? "" : "hidden"}`}>
      <h1 className="text-3xl font-bold text-center pt-10">
        Wellcome to Product page
      </h1>

      {products?.length === 0 ? (
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-center pt-10 mt-[8%]">
            you don&apos;t have any products yet
          </h1>
          <button
            onClick={() => {
              setShowPage("createProduct");
            }}
            className="btn btn-primary text-center mx-auto mt-8"
          >
            Go to create Product
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 mx-10 mt-10">
          
          {products.map((product) => (
            <AdminDashbordSingleProduct key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashbordProductPage;
