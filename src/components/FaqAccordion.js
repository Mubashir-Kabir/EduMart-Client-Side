import React, { useState } from "react";
import logo from "../utilities/pngwing.com.png";

//item function for open and close the accordion
const Item = ({ title, children }) => {
  //state for open and close accordion
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      {/* button for toggle open and close */}
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg text-left font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* answer show and hidden based on toggler */}
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const FaqAccordion = () => {
  return (
    <div>
      {/* Accordion component */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <img
                  src={logo}
                  alt=""
                  className="absolute -top-10 -left-5 z-0 hidden w-32 -mt-12 -ml-28 text-blue-gray-100 lg:w-32 lg:-ml-12 lg:-mt-6 sm:block"
                ></img>
                <span className="relative">Frequently </span>
              </span>{" "}
              Asked Question
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
              Some frequently asked question and answers are given bellow. Hope
              that will help
            </p>
          </div>
          <div className="space-y-4 text-left">
            <Item title="What is EduMart?">
              EduMart is a web-based Audience Engagement Cloud Platform for
              education.The website is mainly focusing on English Language.
              There are interactive courses at virtual events. No app install is
              required.
            </Item>
            <Item title="What courses EduMArt offer?">
              EduMart offers mainly English language based courses. that can
              help anyone to improve in English language
            </Item>
            <Item title="How to Enroll a course?">
              Click the courses section from the navigation. choose your course.
              Click on course details. Click Enroll now from the details page.
              make payment and the course content will be available for you.
            </Item>
            <Item title="How to get get updates?">
              Subscribe EduMart for getting updated. And also about new courses
              and other news.
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
