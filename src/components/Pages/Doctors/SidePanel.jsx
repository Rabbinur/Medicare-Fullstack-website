import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="tex-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BDT
        </span>
      </div>
      <div className="mt-[30px]">
        <p>Available Time Slots:</p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM 9:30PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM 9:30PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              wednesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM 9:30PM
            </p>
          </li>
        </ul>
      </div>
      <div className="flex bg-blue-500 hover:bg-blue-700 justify-center rounded-md ">
        <button className="px-2 py-3  text-white ">Book an Appointment </button>
      </div>
    </div>
  );
};

export default SidePanel;
