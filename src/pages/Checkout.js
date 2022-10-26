import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

const CheckOut = () => {
  const course = useLoaderData();
  const [isFavorite, setIsFavorite] = useState(false);
  const { name, thumbnail, offeredBy, enrolled, price } = course;
  return (
    <div>
      <div className="flex flex-col p-6 mx-4 lg:mx-36 rounded-md my-10 lg:my-16 space-y-4 sm:p-10 bg-gray-100 text-gray-800">
        <h2 className="text-3xl mb-6 font-semibold">{name}</h2>
        <div className="flex flex-col lg:flex-row w-full space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-48 h-48 mx-auto mb-4 lg:w-52 lg:h-52 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
            src={thumbnail}
            alt=""
          />
          <div className="flex flex-col my-auto w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  <small>By</small> {offeredBy.name}
                </h3>
                <p className="text-sm text-left text-gray-600">
                  {enrolled} students
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">
                  $ <span className="text-red-500 text-3xl">{price}</span>
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                type="button"
                className="flex items-center  py-1 space-x-1"
              >
                {isFavorite ? (
                  <MdFavorite className="text-xl text-red-500"></MdFavorite>
                ) : (
                  <GrFavorite className="text-xl"></GrFavorite>
                )}

                <span>Add to favorites</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-1 text-left lg:text-right">
          <p>
            Total amount:
            <span className="font-semibold">$ {price}</span>
          </p>
          <p className="text-sm text-gray-600">Not including taxes</p>
        </div>
        <div className="flex justify-start lg:justify-end space-x-4">
          <Link
            to="/courses"
            className="px-6 py-2 border rounded-md border-violet-600 transition-colors duration-200 hover:bg-violet-600 hover:text-white"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to Courses</span>
          </Link>
          <Link
            to="#"
            className="px-6 py-2 border rounded-md bg-violet-600 transition-colors duration-800 text-gray-50 border-violet-600 hover:bg-violet-900"
          >
            <span className="sr-only sm:not-sr-only">Make</span> Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
