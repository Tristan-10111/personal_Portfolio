import React from "react";
import { experiences } from "../Constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const experience = experiences.map((exp, ind) => (
    <div key={ind} className="mb-6">
      <p>{exp.company_name}</p>
      <p>{exp.date}</p>
      <p>{exp.icon}</p>
      <p>{exp.description}</p>
      <p>{exp.title}</p>
    </div>
  ));
  return (
    <section className={" w-full bg-aboutBg parralaxDemoDiv"}>
      <div>
        <h3 className="activeText text-center text-4xl font-bold desktop:pt-28">
          Experience{" "}
        </h3>
        <Carousel
          responsive={responsive}
          showDots={true}
          className="text-center my-16"
        >
          {experience}
        </Carousel>
      </div>
    </section>
  );
};

export default Experience;
