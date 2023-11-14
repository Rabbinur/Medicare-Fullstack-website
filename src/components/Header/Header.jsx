import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { BiMenu, BiPlusMedical } from "react-icons/bi";
import { links } from "../../assets/data/doctors";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar-icon.png";
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="header sticky left-0 top-0 bg-white w-full  ease-in duration-300 z-[9999] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*============= Logo ============== */}
          <div className="">
            <h1 className="flex items-center text-[22px] md:text-2xl font-bold gap-2">
              {" "}
              <BiPlusMedical color="red" /> Medi Care
            </h1>
          </div>
          {/* ============ Menu =============== */}
          <div className="navigation hidden lg:block">
            <ul className="menu flex items-center gap-[2.7rem]">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-[16px] leading-7 font-[500] hover:text-primaryColor text-textColor"
                      }
                      to={link.link}
                    >
                      {link.title}{" "}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* ============= Nav right =================*/}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button
                className="bg-primaryColor cursor-pointer md:py-2 md:px-6 px-3 py-[1px] text-[14px] h-[30px] md:h-[44px] text-white
                font-[600]  flex items-center justify-center rounded-2xl md:rounded-[50px]"
              >
                Login
              </button>
            </Link>
            <div
              // h-6 w-6
              className="ml-auto p-4 text-inherit cursor-pointer
               hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                // <Icon icon="basil:cross-outline" color="red" width={45} />
                ""
              ) : (
                <BiMenu color="red" width={45} />
              )}
            </div>
          </div>
          {/*============ mobile menu links ============ */}
          <div
            className={
              openNav
                ? "fixed top-[0%] w-[100%] md:hidden flex justify-center items-center flex-col text-center h-screen bg-[#ecf0f3] left-0 right-0 ease-in-out duration-500"
                : "fixed top-[-100%] left-0 right-0  p-10 h-screen bg-[#ecf0f3] ease-in-out duration-500"
            }
          >
            <div className="flex  items-center absolute top-10 right-10 justify-end">
              <div
                onClick={() => setOpenNav(!openNav)}
                className="cursor-pointer"
              >
                {/* <Icon icon="basil:cross-outline" color="red" width={45} /> */}
                <Icon icon="game-icons:rose" color="red" width={45} />
              </div>
            </div>

            <div className="mr-4 ">
              <ul
                // style={{ color: `${textColor}` }}
                className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
              >
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-[16px] leading-7 font-[500] hover:text-primaryColor text-textColor"
                        }
                        to={link.link}
                      >
                        {link.title}{" "}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex gap-4  mt-5">
              <Link href="">
                <Icon icon="simple-icons:youtube" color="red" width={30} />
              </Link>
              <Link href="">
                <Icon icon="logos:facebook" color="red" width={30} />
              </Link>
              <Link href="">
                <Icon icon="bi:instagram" color="red" width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
