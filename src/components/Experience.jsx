/** @format */

import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Experience = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl my-5 text-center">Experience</h1>
        <div className="">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div className="md:flex my-20" key={index}>
                <motion.div
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="md:w-1/2 text-left md:text-center my-10">
                  <h2>{exp.year}</h2>
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="md:w-1/2">
                  <div className="flex gap-1 mb-2">
                    <h2 className="font-bold">{`${exp.role} - `}</h2>
                    <span className="text-gray-400">{exp.company}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{exp.description}</p>
                  <div className="">
                    {exp.technologies.map((tech, i) => (
                      <button
                        className="bg-gray-600 py-1 px-2 rounded-md my-2 mr-2"
                        key={i}>
                        {tech}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
