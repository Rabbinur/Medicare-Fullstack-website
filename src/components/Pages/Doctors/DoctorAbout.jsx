import React from "react";
import formateDate from "../../../utilis/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          {" "}
          Muhibur Rahman
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          corporis veritatis porro eligendi aperiam tempora, at dolorum facilis
          maxime necessitatibus unde itaque deserunt vel cumque id voluptatem!
          Voluptatibus, explicabo maiores.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px]  text-headingColor font-semibold">
          {" "}
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {" "}
                {formateDate("12-04-2010")}- {formateDate("12-04-2013")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New Work
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div className="">
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {" "}
                {formateDate("07-04-2008")} - {formateDate("07-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-6 font-medium text-textColor">
              New Apollo Hospital, New Work
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
