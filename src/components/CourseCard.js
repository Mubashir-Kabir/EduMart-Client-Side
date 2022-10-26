import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { thumbnail, name, details, price, ratings, id } = course;
  let shortDetails;
  if (details.length > 100) {
    shortDetails = details.slice(0, 100);
  }
  return (
    <div className="transition duration-300 transform bg-white rounded shadow-lg hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-64 xl:h-64"
          src={thumbnail}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="px-2 py-4 border border-t-0 rounded-b ">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </h5>
        <p className="mb-5 text-gray-700 text-left">
          {shortDetails ? <>{shortDetails} ...</> : details}
        </p>
        <p className="flex justify-around mb-5">
          <span>
            <span className="font-semibold">price: </span>$ {price}
          </span>
          <span>
            <span className="font-semibold">rating: </span>* {ratings}
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
