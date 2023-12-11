import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar-icon.png";
const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    role: "patient",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      {" "}
      <section className="font-poppins h-screen flex ">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div className="flex flex-col items-center h-full justify-center md:flex-row">
            <div className="flex flex-wrap items-center   shadow-lg dark:bg-gray-900 my-7 ">
              <div className="relative hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
                <div className="absolute inset-0 z-10 bg-gray-700 opacity-50">
                  {" "}
                </div>
                <img
                  src="https://i.postimg.cc/XJBZvxHp/first.jpg"
                  alt=""
                  className="relative inset-0 object-cover w-full h-2/4"
                />
                <div className="absolute left-0 z-10 top-10 lg:top-40">
                  <div className="p-14">
                    <h2 className="text-4xl font-bold text-gray-300 lg:text-5xl ">
                      <span className="text-yellow-300">Hello! </span>welcome to
                      our community
                    </h2>
                    <p className="text-lg font-medium text-gray-300 py-7">
                      Make your dream comes true and achieve your success
                    </p>
                    <button
                      className="px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg w-44 lg:w-80 hover:text-gray-600 "
                      type="submit"
                    >
                      Getting started
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7">
                <div className="px-6 text-left">
                  <h2
                    className="text-3xl font-semibold leading-tight text-gray-700
                   my-7 md:text-4xl pb-7 dark:text-gray-400 "
                  >
                    Login to your account
                  </h2>
                  <form
                    action=""
                    className="py-4 md:py-0"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-5">
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none
               focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-b border-[#0066ff61]
               focus:outline-none focus:border-b-primaryColor text-[18px]
                leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                      />
                    </div>
                    <div className="mb-5 flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-headingColor font-bold text-[15px] leading-7"
                      >
                        Are you a:{" "}
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        >
                          <option value="patient">Patient</option>
                          <option value="doctor">Doctor</option>
                        </select>
                      </label>
                      <label
                        htmlFor=""
                        className="text-headingColor font-bold text-[15px] leading-7"
                      >
                        Are you a:{" "}
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </label>
                    </div>
                    <div className="mb-5 flex items-center  gap-3">
                      <figure
                        className="w-[60px] h-[60px] rounded-full border-2 border-solid
                       border-primaryColor flex items-center justify-center"
                      >
                        <img
                          src={avatar}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </figure>
                      <div className=" relative w-[130px] h-[50px]">
                        <input
                          type="file"
                          name="photo"
                          id="customFile"
                          onChange={handleFileInputChange}
                          accept=".jpg, .png"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer  "
                        />
                        <label
                          htmlFor="customFile"
                          className="absolute top-0 left-0 w-full h-full flex items-center 
                        px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46]
                         text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                        >
                          upload photo
                        </label>
                      </div>
                    </div>
                    <div className="mt-7">
                      <button
                        className="w-full bg-primaryColor text-white text-[18px] 
            px-4 py-2 rounded-md leading-7"
                      >
                        Sign Up
                      </button>
                    </div>
                    <p className="text-center text-textColor mt-5">
                      have an account?{" "}
                      <Link to="/login" className="text-primaryColor">
                        Login
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
