import React from "react";

//static state component (students,courses,teachers,subscribers count)
const State = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl text-red-600 font-bold lg:text-5xl xl:text-6xl">
              144K+
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Students
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl text-red-600 font-bold lg:text-5xl xl:text-6xl">
              12.9K+
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Teachers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold text-red-600 lg:text-5xl xl:text-6xl">
              48.3K+
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Courses
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl text-red-600 font-bold lg:text-5xl xl:text-6xl">
              24.5K+
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
