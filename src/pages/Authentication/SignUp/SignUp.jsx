/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // data
  const navigate = useNavigate();
  // all state
  const [error, setError] = useState("");

  // all funcitons
  const handleSignUpSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    fetch(`http://localhost:5000/api/v1/user/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success("Account created successfully Check your Email");
          navigate("/");
        } else {
          setError(data.message);
        }
      });
  };
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold ">Register</h1>
        </div>
        <div className="card shrink-0 w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handleSignUpSubmit} className="card-body">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered"
                required
              />
            </div>
            {/* Last name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <h1 className="text-red-600 mt-2 ml-3">{error}</h1>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Create My Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
