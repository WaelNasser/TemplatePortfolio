/** @format */

import { PROJECTS } from "../constants"; // Imports the PROJECTS array from code1
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Projects = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl my-5 text-center">Projects</h1>
        {PROJECTS.map((project, index) => {
          return (
            <div className="md:flex my-10" key={index}>
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="md:w-1/2 mb-10 md:mb-0">
                <img
                  src={project.image}
                  alt="image"
                  className="flex items-center justify-center mx-auto"></img>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="md:w-1/2">
                <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="">
                  {project.technologies.map((tech, i) => (
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
  );
};

export default Projects;
