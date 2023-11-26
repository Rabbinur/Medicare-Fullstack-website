import React from "react";
import { doctors } from "../../../assets/data/doctors";
import DoctorsCard from "../../DoctorsList/DoctorsCard";
import Testomonials from "../../Testomonials/Testomonials";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="max-w-screen-2xl mx-auto text-center ">
          <h2 className="text-3xl font-bold">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pr-2 px-3 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search  Doctor"
            />
            <button className="mt-0 px-3 py-2 bg-blue-500 rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-2xl mx-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
          >
            {doctors.map((doctor) => {
              return (
                <Link key={doctor.id}>
                  {" "}
                  <DoctorsCard key={doctor.id} item={doctor} />{" "}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> What our patients says</h2>
            <p className="text_para">
              Word Class Care for everyone. Our health system offers unmatched,
              expert health specalist is available here
            </p>
          </div>
          <Testomonials />
        </div>
      </section>
    </>
  );
};

export default Doctors;
