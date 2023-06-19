import React, { useEffect } from "react";
// import { motion } from "framer-motion";
import { styles } from "../style";
// import { ComputersCanvas } from "./canvas";
import { heroImage } from "../assets/index";
import heroPageAnimation from "../assets/lottieFiles/heroPage.json";
// import heroPageAnimation2 from "../assets/lottieFiles/icon-4.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <section className={"desktop:w-full h-screen bg-heroBg"}>
      <div className="flex desktop:flex-row my-24 items-center phone:flex-col">
        <div
          className="desktop:text-base text-center w-1/2 my-32 mx-9 phone:w-full  "
          data-aos="fade-right"
        >
          <p className="text-heroText">Hi there</p>
          <h3 className="my-6 text-heroText text-4xl font-bold">
            I am Tristan
          </h3>
          <p className="my-6 text-heroText">Front end developer</p>
          <p className="text-heroText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="btn my-12 ">
            <button className="p-2 ">
              <span>My Resume</span>
            </button>
          </div>
        </div>
        <div className="desktop:flex mx-6 phone:hidden">
          <Lottie
            animationData={heroPageAnimation}
            loop={true}
            className="phone:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
