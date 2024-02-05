/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AllProducts } from "../../../contextApi/ProductContext";
import toast from "react-hot-toast";
import scrollToTop from "../../../components/Scroll/ScrollToTop";

const AdminDasahbordSinglePageEdit = () => {
  // all data
  const product = useLoaderData();
  const navigate = useNavigate();
  const { name, _id, price, discount, description, productLink, writer } =
    product.product;

  // context api
  const { refresh, setRefresh } = useContext(AllProducts);

  //   all state
  const [show, setShow] = useState(false);
  const [photoSpiner, setPhotoSpiner] = useState(false);
  const [updateSpiner, setUpdateSpiner] = useState(false);
  const [deleteSpiner, setDeleteSpiner] = useState(false);

  // all functions
  const handleChangeproductPhoto = (event) => {
    setPhotoSpiner(true);
    event.preventDefault();
    const photo = event.target.photo.files[0];

    const photoData = new FormData();
    photoData.append("photo", photo);

    fetch(`http://localhost:5000/api/v1/product/product/photo?id=${_id}`, {
      method: "PATCH",
      body: photoData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success("Photo update successfully");
          scrollToTop();
          setRefresh(refresh + 1);
          navigate("/profile");
          setPhotoSpiner(false);
        }
      });
  };

  const handleUpdateProductInfo = (event) => {
    setUpdateSpiner(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const writer = form.writer.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const productLink = form.productLink.value;
    const description = form.description.value;

    const product = {
      _id,
      name,
      writer,
      price,
      discount,
      productLink,
      description,
    };
    console.log(product);

    fetch("http://localhost:5000/api/v1/product/product/update", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log(data);
          toast.success("Product in update successfully");
          scrollTo(0, 0);
          setRefresh(refresh + 1);
          setUpdateSpiner(false);
        }
      });
  };

  const handleDeleteProduct = () => {
    setDeleteSpiner(true);
    const confirm = window.confirm("Are you want to delete this product");
    if (confirm) {
      fetch(`http://localhost:5000/api/v1/product/product?id=${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            navigate("/profile");
            scrollToTop();
            setRefresh(refresh + 1);
            setDeleteSpiner(false);
          }
        });
    }
  };

  return (
    <div className="mx-5">
      <div className="flex">
        <div className="my-auto">
          {/* update product photo */}
          <img
            className="w-[350px] h-[500px] border"
            src={`http://localhost:5000/api/v1/product/product/photo?id=${_id}`}
            alt="book photo"
          />
          <form onSubmit={handleChangeproductPhoto} className="flex flex-col">
            <input
              type="file"
              name="photo"
              id=""
              className={`${show ? "" : "hidden"}`}
            />
            <button
              onClick={() => {
                setShow(true);
              }}
              className={`btn btn-primary ${show ? "hidden" : ""}`}
            >
              Change Product Photo
            </button>
            <button
              type="submit"
              onClick={() => {
                setShow(true);
              }}
              className={`btn btn-primary ${show ? "" : "hidden"}`}
            >
              Update Product Photo{" "}
              <span
                className={`loading loading-spinner ${
                  photoSpiner ? "" : "hidden"
                }`}
              ></span>
            </button>
          </form>
        </div>
        {/* update product info */}
        <form
          onSubmit={handleUpdateProductInfo}
          className="w-[550px] mx-auto pt-10 "
        >
          {/* Product Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text ml-3">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              defaultValue={name}
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
              defaultValue={writer}
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
              defaultValue={price}
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
              defaultValue={discount}
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
              defaultValue={productLink}
              name="productLink"
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
              defaultValue={description}
              placeholder="Product Description"
              className="textarea h-[200px]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Product{" "}
              <span
                className={`loading loading-spinner ${
                  updateSpiner ? "" : "hidden"
                }`}
              ></span>
            </button>
            <h1
              onClick={handleDeleteProduct}
              type="none"
              className="btn btn-error mt-2"
            >
              Delete Product{" "}
              <span
                className={`loading loading-spinner ${
                  deleteSpiner ? "" : "hidden"
                }`}
              ></span>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDasahbordSinglePageEdit;
