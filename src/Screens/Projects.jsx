import React from "react";
import { projects } from "../Constants";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="parralaxDemoDivContact bg-techBg">
      <div>
        <h4 className="desktop:text-4xl tablet:text-6xl text-gray-700 font-semibold text-center mb-12">
          Projects
        </h4>
      </div>
      <div className="flex m-6 -mt-12 text-heroText">
        {projects.map((project, ind) => (
          <div key={ind} className="m-16 bg-cardBg p-4 w-80 rounded-2xl">
            <p className="text-2xl mb-5 font-semibold">{project.name}</p>
            {/* <Link to="https://github.com/Tristan-10111/myWeatherApp">
              Github link
            </Link>
            */}
            <img
              src={project.image}
              alt="image"
              className="projectImage w-80 rounded-2xl"
            />{" "}
            <p className="text-left mt-4 font-medium">{project.description}</p>
            <div className="mt-4 flex font-medium">
              <p className="mr-3">Tech used:</p>
              <p className="flex">
                {project.tech.map((tec, ind) => (
                  <div key={ind}>
                    <p className="ml-2">{tec.name}</p>
                  </div>
                ))}
              </p>
            </div>
            <Link to="https://github.com/Tristan-10111/myWeatherApp">
              <p className="mt-4 font-semibold">Github link</p>
            </Link>
            <Link to="https://localweather021.netlify.app/">
              <p className="mt-4  font-semibold">Hosted link</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
