/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import scrollToTop from "../../../components/Scroll/ScrollToTop";
import { AuthContex } from "../../../contextApi/UserContex";

const Login = () => {
  // data
  const navigate = useNavigate();

  // context api
  const { refresh, setRefresh } = useContext(AuthContex);

  // all state
  const [error, setError] = useState("");

  // all funcitons
  const handleLogInSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };

    fetch("http://localhost:5000/api/v1/user/signin", {
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
          navigate("/profile");
          localStorage.setItem("token", data.data.token);
          setRefresh(refresh + 1);
          scrollToTop();
        } else {
          setError(data.message);
        }
      });
  };
  return (
    <div className="hero w-full">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-[500px]  shadow-2xl bg-base-100">
          <form onSubmit={handleLogInSubmit} className="card-body">
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
              {/*  Forgot password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <h1 className="text-red-600 mt-2 ml-3">{error}</h1>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>

          <h1 className="text-center pb-5">
            Don&#39;t have an account?{" "}
            <Link to={`/signup`} className="hover:border-b-[1px] border-black">
              {" "}
              Create one
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
