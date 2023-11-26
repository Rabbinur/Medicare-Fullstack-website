import React from "react";
import Home from "../components/Pages/home";
import { Routes, Route } from "react-router-dom";
import Doctors from "./../components/Pages/Doctors/Doctors";
import DoctorsDetails from "./../components/Pages/Doctors/DoctorsDetails";
import Login from "./../components/Pages/Login";
import SignUp from "./../components/Pages/SignUp";
import Contact from "./../components/Pages/Contact";
import Services from "./../components/Pages/Services";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorsDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default Routers;
