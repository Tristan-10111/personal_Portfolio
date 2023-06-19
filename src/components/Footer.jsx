import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" w-full parralaxDemoDivFooter  bg-techBg">
      <h3
        className="text-heroText text-center text-3xl font-bold position relative top-9"
        data-aos="fade-down"
      >
        © All rights reserved 2023
      </h3>
      <div className="flex justify-center mt-14  z-200" data-aos="fade-right">
        <Link
          className="icon"
          //   to="https://www.facebook.com/tristan.vollenhoven.733"
        >
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link
          className="icon"
          to="https://www.linkedin.com/in/tristan-vollenhoven-0314a8240/"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link
          className="icon"
          to="https://www.instagram.com/vollenhoven_tristan/"
        >
          <i class="fab fa-instagram"></i>
        </Link>
        <Link className="icon" to="https://github.com/Tristan-10111">
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link className="icon" to="https://discord.com/channels/@me">
          <i class="fa-brands fa-discord"></i>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
