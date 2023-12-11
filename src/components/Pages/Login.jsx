import React, { useState } from "react";
import SidePanel from "./Doctors/SidePanel";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor ">Welcome Back</span>
        </h3>
        <form action="" className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-[#0066ff61]
               focus:outline-none focus:border-b-primaryColor text-[18px]
                leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mt-7">
            <button
              className="w-full bg-primaryColor text-white text-[18px] 
            px-4 py-2 rounded-md leading-7"
            >
              Login
            </button>
          </div>
          <p className="text-center text-textColor mt-5">
            don&apos;t have an account?{" "}
            <Link to="/register" className="text-primaryColor">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
