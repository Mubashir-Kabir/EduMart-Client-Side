import React from "react";

const GetUpdate = () => {
  return (
    <div className="lg:px-24 lg:py-24 px-2 py-5">
      <div
        className="w-full  rounded-md "
        style={{
          backgroundColor: "#15507A",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-50">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-50">
            Find out about new courses and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-purple-600 hover:bg-purple-800 text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpdate;
