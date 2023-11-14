import React from "react";
import aboutImage from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* ============ about Image =========== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImage} alt="" />
            <div
              className="absolute z-20 bottom-4 w-[200px] 
            md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]"
            >
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* ============= About content ======== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="md:heading  font-bold text-[32px]">
              Proud to be one of the nations best
            </h2>
            <p className="text_para">
              For 30 years in a row, adipisicing elit. Labore quos neque
              recusandae rerum dolorum libero officia amet, velit consectetur
              laborum.
            </p>
            <p className="text_para mt-[30px]">
              Our best is something we strive for each day, adipisicing elit.
              Labore quos neque recusandae rerum dolorum libero officia amet,
              velit consectetur laborum.
            </p>
            <Link to="/">
              <button className="btn"> Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
