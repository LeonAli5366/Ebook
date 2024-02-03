/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContex } from "../../../contextApi/UserContex";

const AdminDashbordHomePage = ({ showPage }) => {
  // context api
  const { user } = useContext(AuthContex);

  // all functions
  const handleUpdateProfiile = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = user?.email;
    const address = form.address.value;
    const city = form.city.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;

    const userData = {
      firstName,
      lastName,
      email,
      address,
      city,
      country,
      zipCode,
    };

    fetch("http://localhost:5000/api/v1/user/updateUser", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("User update successfully");
          window.location.reload(true);
        } else {
          console.log(data);
        }
      });
  };
  return (
    <div className={`${showPage === "Home" ? "" : "hidden"} pb-52`}>
      <h1 className="text-4xl font-bold text-center pt-10">
        Wellcome to Admin dashbord
      </h1>
      <h1 className="text-2xl font-bold text-center pt-10">Admin info</h1>

      <form onSubmit={handleUpdateProfiile} className="w-[550px] mx-auto pt-10">
        {/* First Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">First Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.firstName}
            name="firstName"
            className="input input-bordered"
            required
          />
        </div>
        {/* Last name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Last name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.lastName}
            name="lastName"
            className="input input-bordered"
            required
          />
        </div>
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Email</span>
          </label>
          <input
            type="email"
            disabled
            defaultValue={user?.email}
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        {/* Address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            defaultValue={user?.address?.address}
            className="input input-bordered"
            required
          />
        </div>
        {/* City */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">City</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="city"
            defaultValue={user?.address?.city}
            className="input input-bordered"
            required
          />
        </div>
        {/* Country */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Country</span>
          </label>
          <input
            type="text"
            name="country"
            placeholder="country"
            defaultValue={user?.address?.country}
            className="input input-bordered"
            required
          />
        </div>
        {/* Zip code */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Zip code</span>
          </label>
          <input
            type="text"
            name="zipCode"
            placeholder="zip code"
            defaultValue={user?.address?.zipCode}
            className="input input-bordered"
            required
          />
        </div>
        {/* Update  button*/}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Update Admin info
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashbordHomePage;
