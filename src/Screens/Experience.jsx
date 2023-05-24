import React from "react";
import { experiences } from "../Constants";

const Experience = () => {
  return (
    <section className={" w-full bg-aboutBg parralaxDemoDiv"}>
      <div>
        <h3 className="activeText text-center text-4xl font-bold">
          Experience{" "}
        </h3>
        <div>
          {/* {experiences.map((exp, ind) => (
            <div key={ind}>
              <p>{exp.company_name}</p>
              <p>{exp.date}</p>
              <p>{exp.icon}</p>
              <p>{exp.points}</p>
              <p>{exp.title}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
