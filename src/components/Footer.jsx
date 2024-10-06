/** @format */
import { CONTACT } from "../constants";

const Footer = () => {
  return (
    <div className="my-10">
      <span className="w-[100%] h-[2px] bg-gray-500 text-gray-500 block"></span>
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl my-8">Get in Touch</h1>
        <p className="text-gray-500 my-3">{CONTACT.address}</p>
        <p className="text-gray-500 my-3">{CONTACT.phoneNo}</p>
        <p className="text-gray-500 my-3 underline">{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Footer;
