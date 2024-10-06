/** @format */

import heroImage from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center items-center mb-5">
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:w-1/2 w-full mt-8 flex items-center justify-center">
        <div className="max-w-[80%]">
          <h1 className="text-[50px] md:text-[50px]">Ravi Kumar</h1>
          <h3 className="text-[28px] bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
            Full Stack Developer
          </h3>
          <p className="text-[18px] my-10 text-gray-300">{HERO_CONTENT}</p>
          <a
            href="/portfolio/public/resume.pdf"
            download="resume.pdf"
            className="py-3 px-4 bg-white text-black rounded-full mt-10">
            Download Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:w-1/2">
        <img
          src={heroImage}
          alt="hero_image"
          className="object-fill border border-stone-900 rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
