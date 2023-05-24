import React from "react";
import { styles } from "../style";
import { technologies } from "../Constants";

const Tech = () => {
  return (
    <section className=" w-full parralaxDemoDivContact bg-techBg">
      <h3 className="text-heroText text-center text-4xl font-bold">
        Tech Stack
      </h3>

      <div className="my-12 grid grid-cols-4 gap-4">
        {technologies.map((tech, ind) => (
          <div
            key={ind}
            className="flex flex-col items-center bg-black py-6 w-36 h-60 rounded-md"
          >
            <img src={tech.icon} className="w-6" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
