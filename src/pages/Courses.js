import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import SideBar from "../components/SideBar";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-3 py-6 lg:px-6 lg:py-12 ">
      <div className="col-span-1">
        <SideBar courses={courses}></SideBar>
      </div>
      <div className="col-span-3 grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
