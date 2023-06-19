import React from "react";
import { projects } from "../Constants";

const Projects = () => {
  return (
    <section className="parralaxDemoDivContact bg-techBg">
      <div>
        <h4 className="desktop:text-4xl tablet:text-6xl text-gray-700 font-semibold text-center mb-12">
          Projects
        </h4>
      </div>
      <div className="flex">
        {projects.map((project, ind) => (
          <div key={ind}>
            <p>{project.description}</p>
            <p>{project.name}</p>
            <p>{project.source_code_link}</p>
            <p>
              {project.tags.map((tag, ind) => (
                <div key={ind}>
                  <p>{tag.color}</p>
                  <p>{tag.name}</p>
                </div>
              ))}
            </p>
            <img src={project.image} alt="image" className="w-36" />
          </div>
        ))}
      </div>
      <div>
        {projects.forEach((project, ind) => {
          <div key={ind}>
            <p>{project.name}</p>
            <div>
              {project.tags.forEach((tag, ind) => {
                <div key={ind}>
                  <p>{tag.name}</p>
                  <p>{tag.color}</p>
                </div>;
              })}
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Projects;
