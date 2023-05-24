import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" w-full parralaxDemoDivFooter  bg-aboutBg">
      <h3
        className="activeText text-center text-3xl font-bold "
        data-aos="fade-down"
      >
        © All rights reserved 2023
      </h3>
      <div className="flex justify-center my-6  z-200" data-aos="fade-right">
        <Link className="icon">
          {" "}
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link className="icon">
          {" "}
          <i class="fa-brands fa-linkedin-in"></i>
          {/* <i class="fab fa-twitter"></i> */}
        </Link>
        <Link className="icon">
          <i class="fab fa-instagram"></i>
        </Link>
        <Link className="icon">
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link className="icon">
          <i class="fa-brands fa-discord"></i>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
