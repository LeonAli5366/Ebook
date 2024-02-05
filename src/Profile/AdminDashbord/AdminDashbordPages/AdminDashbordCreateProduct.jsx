/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import scrollToTop from "../../../components/Scroll/ScrollToTop";
import { AllProducts } from "../../../contextApi/ProductContext";

const AdminDashbordCreateProduct = ({ showPage, setShowPage }) => {
  const { refresh, setRefresh } = useContext(AllProducts);
  // all state
  const [error, setError] = useState("");
  const [createSpiner, setCreateSpiner] = useState(false)

  const handleCreateProduct = (event) => {
    setCreateSpiner(true)
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const writer = form.writer.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const productLink = form.productLink.value;
    const description = form.description.value;
    const photo = form.photo.files[0];

    const productData = new FormData();

    productData.append("name", name);
    productData.append("writer", writer);
    productData.append("price", price);
    productData.append("discount", discount);
    productData.append("productLink", productLink);
    productData.append("description", description);
    productData.append("photo", photo);

    fetch("http://localhost:5000/api/v1/product/create", {
      method: "POST",
      body: productData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Product created successfully");
          setShowPage("Products");
          scrollToTop();
          form.reset();
          setRefresh(refresh + 1);
          setCreateSpiner(false)
        } else {
          setError(data.message);
          setCreateSpiner(false)
        }
      });
  };
  return (
    <div className={`${showPage === "createProduct" ? "" : "hidden"}`}>
      <h1 className="text-3xl font-bold text-center pt-10">
        Create a new product
      </h1>
      <form onSubmit={handleCreateProduct} className="w-[550px] mx-auto pt-10">
        {/* Product Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        {/* Writer Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Writer Name</span>
          </label>
          <input
            type="text"
            placeholder="Writer Name"
            name="writer"
            className="input input-bordered"
            required
          />
        </div>
        {/* Product Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            className="input input-bordered"
            required
          />
        </div>
        {/* Product Discount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Discount (%)</span>
          </label>
          <input
            type="text"
            placeholder="Product Discount"
            name="discount"
            className="input input-bordered"
            required
          />
        </div>
        {/* Product Link */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Link</span>
          </label>
          <input
            type="text"
            placeholder="Product Link"
            name="productLink"
            className="input input-bordered"
            required
          />
        </div>
        {/* Product Photo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Photo</span>
          </label>
          <input
            type="file"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        {/* Product Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Product Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Product Description"
            className="textarea h-[200px]"
            required
          />
        </div>
        <h1 className="text-red-600 mt-2 ml-3">{error}</h1>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Create Product <span
                className={`loading loading-spinner ${
                  createSpiner ? "" : "hidden"
                }`}
              ></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashbordCreateProduct;
