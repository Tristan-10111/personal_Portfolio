import React from "react";
import { styles } from "../style";
import { profileImage } from "../assets";
import { aboutTech } from "../Constants";

const About = () => {
  return (
    <section className={" w-full bg-aboutBg parralaxDemoDiv"}>
      <div className="flex ">
        <div
          className="lg:w-1/2 my-12 mx-12 sm:w-full mt-32"
          data-aos="fade-right"
        >
          <img
            src={profileImage}
            alt="profileImage"
            className="profileImg sm:profileImg2"
          />
        </div>
        <div
          className="lg:text-base text-white w-1/2 mx-9 my-24 sm:w-full"
          data-aos="fade-down"
        >
          <h3 className="my-6 activeText text-4xl font-bold">About me </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex my-6 -mx-6">
            {aboutTech.map((tech, ind) => (
              <div key={ind} className="flex">
                <img src={tech.icon} className="w-6 mx-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
