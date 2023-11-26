import React from "react";
import { services } from "../../assets/data/services";
import ServicesCard from "./Services/ServicesCard";

const Services = () => {
  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-[30px] mt-[55px]">
          {services.map((item, i) => (
            <ServicesCard key={i} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
