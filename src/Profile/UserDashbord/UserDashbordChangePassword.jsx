/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContex } from "../../contextApi/UserContex";
import toast from "react-hot-toast";
import scrollToTop from "../../components/Scroll/ScrollToTop";

const UserDashbordChangePassword = ({ showPage, setShowPage }) => {
  // context api
  const { user } = useContext(AuthContex);

  //   all state
  const [error, setError] = useState("");

  //  all functions
  const handleChangePassword = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const oldPassword = form.oldPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    const passwordData = {
      oldPassword,
      newPassword,
      confirmPassword,
      email: user?.email,
    };

    

    fetch("http://localhost:5000/api/v1/user/password/change", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passwordData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.status === "success") {
          toast.success("Password changed successfully");
          form.reset();
          setShowPage("Home");
          scrollToTop();
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className={`${showPage === "Password" ? "" : "hidden"}`}>
      <h1 className="text-3xl font-bold text-center pt-10">
        Chenge Your Password
      </h1>
      <form onSubmit={handleChangePassword} className="w-[550px] mx-auto pt-10">
        {/* Old password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Old password</span>
          </label>
          <input
            type="password"
            placeholder="old password"
            name="oldPassword"
            className="input input-bordered"
            required
          />
        </div>
        {/* New password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">New Password</span>
          </label>
          <input
            type="password"
            placeholder="new password"
            name="newPassword"
            className="input input-bordered"
            required
          />
        </div>
        {/* Confirm new password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text ml-3">Confirm New Password</span>
          </label>
          <input
            type="password"
            placeholder="old password"
            name="confirmPassword"
            className="input input-bordered"
            required
          />
        </div>
        <h1 className="text-red-600 mt-2 ml-3">{error}</h1>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Chenge Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDashbordChangePassword;
