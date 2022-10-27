import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const CourseCard = ({ course }) => {
  //user data destructuring
  const { thumbnail, name, details, price, ratings, id } = course;

  //short description making for card
  let shortDetails;
  if (details.length > 100) {
    shortDetails = details.slice(0, 100);
  }

  return (
    <div className="transition duration-300 transform bg-white rounded shadow-lg hover:-translate-y-1 hover:shadow md:text-center">
      {/* card image */}
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-64 xl:h-64"
          src={thumbnail}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      {/* card details */}
      <div className="px-2 py-4  ">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </h5>
        <p className="mb-5 text-gray-700 text-left">
          {shortDetails ? <>{shortDetails} ...</> : details}
        </p>
        <p className="flex justify-around mb-5">
          <span>
            <span className="font-semibold">price: </span>
            <span className="font-semibold text-xl">$</span>
            <span className="text-red-500 font-semibold text-lg">{price}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-semibold flex items-center">rating: </span>
            <span className="flex items-center space-x-1">
              <AiTwotoneStar className="text-yellow-500"></AiTwotoneStar>{" "}
              {ratings}
            </span>
          </span>
        </p>
        <Link
          to={`../course/${id}`}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none"
        >
          Course Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
