import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { name, thumbnail, offeredBy, enrolled, price } = course;
  return (
    <div>
      <div className="flex flex-col p-6 mx-4 lg:mx-36 rounded-md my-10 lg:my-16 space-y-4 sm:p-10 bg-gray-100 text-gray-800">
        <h2 className="text-xl mb-6 font-semibold">{name}</h2>
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
                <p className="text-lg font-semibold">$ {price}</p>
              </div>
            </div>
            <div className="text-sm ">
              <button
                type="button"
                className="flex items-center  py-1 space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
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
            className="px-6 py-2 border rounded-md border-violet-600 hover:bg-violet-600 hover:text-white"
          >
            Back
            <span className="sr-only sm:not-sr-only">to Courses</span>
          </Link>
          <Link
            to=""
            className="px-6 py-2 border rounded-md bg-violet-600 text-gray-50 border-violet-600 hover:bg-violet-900"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
