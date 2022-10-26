import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData();
  const ref = React.createRef();

  const {
    name,
    price,
    id,
    imgURL,
    offeredBy,
    skillsYouGain,
    whatYouLearn,
    ratings,
    enrolled,
    details,
  } = course;
  let one, two, three, four, five;
  if (ratings >= 1) {
    one = true;
  }
  if (ratings >= 2) {
    two = true;
  }
  if (ratings >= 3) {
    three = true;
  }
  if (ratings >= 4) {
    four = true;
  }
  if (ratings >= 5) {
    five = true;
  }
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-800 relative ">
        <Pdf targetRef={ref} filename={`${name}.pdf`}>
          {({ toPdf }) => (
            <GrDocumentPdf
              onClick={toPdf}
              className="absolute top-0 right-0 text-xl lg:top-12 lg:right-24 lg:text-4xl hover:cursor-pointer"
              title="Print"
            ></GrDocumentPdf>
          )}
        </Pdf>

        <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
          <img
            src={imgURL}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div
            ref={ref}
            className="p-6 pb-12 m-4 mx-auto -mt-20 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100"
          >
            <div className="space-y-2">
              <h3 className="inline-block text-3xl mb-2 lg:text-5xl lg:mb-5 font-semibold sm:text-3xl">
                {name}
              </h3>
              <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src={offeredBy.imgURL}
                  alt=""
                  className="self-center flex-shrink-0 w-16 h-16 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">
                    {" "}
                    <span className="text-2xl font-semibold">By </span>
                    {offeredBy.name}
                  </h4>
                </div>
              </div>
              <div className="flex justify-center pt-4 space-x-4 align-center">
                <Link
                  to="#"
                  aria-label="GitHub"
                  className="p-2 rounded-md text-gray-800 hover:text-violet-600"
                >
                  <BsGithub></BsGithub>
                </Link>
                <Link
                  to="#"
                  aria-label="Facebook"
                  className="p-2 rounded-md text-gray-800 hover:text-violet-600"
                >
                  <BsFacebook></BsFacebook>
                </Link>
                <Link
                  to="#"
                  aria-label="Whatsapp"
                  className="p-2 rounded-md text-gray-800 hover:text-violet-600"
                >
                  <IoLogoWhatsapp></IoLogoWhatsapp>
                </Link>
                <Link
                  to="#"
                  aria-label="Email"
                  className="p-2 rounded-md text-gray-800 hover:text-violet-600"
                >
                  <GrMail></GrMail>
                </Link>
              </div>
              <div className="text-left flex flex-col lg:flex-row gap-3 items-center justify-around ">
                <div>
                  <h2 className="text-2xl font-semibold">student reviews</h2>
                  <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                    <div className="flex">
                      <AiFillStar
                        className={`text-2xl ${
                          one ? "text-yellow-500" : "text-gray-400"
                        }`}
                      ></AiFillStar>

                      <AiFillStar
                        className={`text-2xl ${
                          two ? "text-yellow-500" : "text-gray-400"
                        }`}
                      ></AiFillStar>
                      <AiFillStar
                        className={`text-2xl ${
                          three ? "text-yellow-500" : "text-gray-400"
                        }`}
                      ></AiFillStar>
                      <AiFillStar
                        className={`text-2xl ${
                          four ? "text-yellow-500" : "text-gray-400"
                        }`}
                      ></AiFillStar>
                      <AiFillStar
                        className={`text-2xl ${
                          five ? "text-yellow-500" : "text-gray-400"
                        }`}
                      ></AiFillStar>
                    </div>
                    <span className="text-gray-600">{ratings} out of 5</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {enrolled} already enrolled
                  </p>
                  <p className="mt-2">
                    <span className="mr-1 font-semibold">Price:</span>
                    <span className="font-semibold px-4 py-1  tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500">
                      ${price}
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <Link
                    to={`../checkout/${id}`}
                    className="inline-flex items-center  justify-center py-4 px-7 font-semibold text-xl tracking-wide text-white transition duration-200 rounded shadow-xl bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                  >
                    Enroll now
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-6 text-left space-y-12">
              <div>
                <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed border-gray-600">
                  <h4 className="text-lg font-semibold">Skill You gain:</h4>
                  {skillsYouGain.map((skill) => (
                    <p
                      key={Math.random() * 10000}
                      className="px-3 mb-1 py-1 rounded-full hover:underline bg-violet-600 text-gray-50"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">What you learn:</h4>
                  <ul className="ml-4 space-y-1 list-disc">
                    {whatYouLearn.map((learning) => (
                      <li
                        key={Math.random() * 10000}
                        className="hover:underline"
                      >
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold">Course Details:</h4>
              <p className="text-sm font-light text-justify">{details}</p>
            </div>
            <Link
              to={`../checkout/${id}`}
              className="inline-flex items-center  justify-center py-4 px-7 font-semibold text-xl tracking-wide text-white transition duration-200 rounded shadow-xl bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
