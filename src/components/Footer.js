import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      {/* footer component */}
      <footer className="py-6 bg-gray-100 text-gray-900">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2022 All rights reserved</span>
              <Link to="#">
                <span>Privacy policy</span>
              </Link>
              <Link to="#">
                <span>Terms of service</span>
              </Link>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <Link
                to="#"
                title="Email"
                className="flex items-center justify-center rounded-full  text-gray-800 hover:text-red-800"
              >
                <MdEmail className="text-3xl"></MdEmail>
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex items-center justify-center rounded-full text-gray-800 hover:text-red-800"
              >
                <IoLogoTwitter className="text-3xl"></IoLogoTwitter>
              </Link>
              <Link
                to="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-800 hover:text-red-800"
              >
                <BsGithub className="text-3xl"></BsGithub>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
