/** @format */

import myImage from "../assets/raviKumarLogo.webp";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div>
        <img src={myImage} alt="logo" className="" width={50} height={33} />
      </div>
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook className="text-2xl cursor-pointer" />
        </a>
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub className="text-2xl cursor-pointer" />
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="text-2xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
