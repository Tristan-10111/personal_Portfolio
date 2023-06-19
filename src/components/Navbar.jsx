import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../Constants";
import { tristan, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full  items-center bg-navbarBg z-20 fixed  top-0  `}
    >
      <div className="desktop:w-full flex justify-between items-center max-w-7xl mx-auto tablet:desktop:w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={tristan} alt="logo" className="w-24  object-contain" />
        </Link>
        <ul className="list-none desktop:flex gap-10 tablet:flex flex-row phone:hidden">
          {navLinks.map((links) => (
            <li
              key={links.id}
              className={`${
                active === links.title
                  ? "activeText text-[21px] font-extrabold"
                  : "text-white text-lg"
              }`}
              onClick={() => setActive(links.title)}
            >
              <a href={`#${links.id}`} className="navLinks">
                {links.title}
              </a>
            </li>
          ))}
        </ul>
        {/* hover:active-text text-[18px] font-medium cursor-pointer */}
        <div className="desktop:hidden phone:flex flex-row flex-1 justify-end items-center tablet:hidden">
          <img
            src={menuToggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor pointer z-20"
            onClick={() => setMenuToggle(!menuToggle)}
          />
        </div>
        {/* burger menu */}
        <div
          className={`${
            !menuToggle ? "hidden" : "flex"
          } bg-aboutBg w-45 absolute top-5 right-0 p-6 w-48 h-80 rounded-xl z-10 text-activeText`}
        >
          <ul className="list-none flex justify-center items-start flex-col gap-12">
            {navLinks.map((links) => (
              <li
                key={links.id}
                className={`${
                  active === links.title ? "text-activeText" : "text-white"
                } hover:text-activeText text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(links.title)}
              >
                <a href={`#${links.id}`}>{links.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* burger menu ends */}
      </div>
    </nav>
  );
};

export default Navbar;
