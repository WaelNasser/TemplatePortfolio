/** @format */

import { FaReact, FaNodeJs, FaLaravel, FaDatabase } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Technologies = () => {
  return (
    <div>
      <div className="flex items-center flex-col my-[200px]">
        <h1 className="text-5xl my-5">Technologies</h1>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-10">
          <a className="text-5xl md:text-7xl my-2">
            <FaNodeJs className="text-green-600" />
          </a>
          <a className="text-5xl md:text-7xl my-2">
            <FaReact className="text-blue-400" />
          </a>
          <a className="text-5xl md:text-7xl my-2">
            <FaLaravel className="text-red-600" />
          </a>
          <a className="text-5xl md:text-7xl my-2">
            <FaDatabase className="text-blue-400" />
          </a>
          <a className="text-5xl md:text-7xl my-2">
            <RiNextjsFill />
          </a>
          <a className="text-5xl md:text-7xl my-2">
            <RiTailwindCssFill className="text-blue-400" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
